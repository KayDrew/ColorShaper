import express  from "express";
import {engine} from "express-handlebars";
import bodyParser from "body-parser";
import pgPromise from "pg-promise";
import flash from "express-flash";
import session from "express-session";
import routes from "./routes/routes.js";
import colorShaper from "./service/database.js";

const app = express()

const pgp = pgPromise()


const connectionString = process.env.DATABSE || 'postgres://pmliymef:8M6Yrjki14FCTQxAG8k0WrEuTjEB_BtD@tai.db.elephantsql.com/pmliymef'

const db = pgp(connectionString)
const color = colorShaper(db) 
const route = routes(color);

// use the express.static built-in middleware to serve static file 'css'
app.use(express.static(('public')))

app.use(express.static('audio'));

//use session to maintain data on the application
app.use(session({
    secret : 'This is a string',
    resave: false,
    saveUninitialized: true
}));

app.use(flash());

// set and callback engine 
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())




app.get("/", async function(req,res){
   
    res.render("index")
})

app.post("/", route.home)
app.get("/game", route.gamePlay)

app.get("/settings",route.settings);

const PORT = process.env.PORT || 4000

app.listen(PORT, function(){
    console.log('App starting on port', PORT);
})