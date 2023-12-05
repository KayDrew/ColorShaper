import express  from "express";
import {engine} from "express-handlebars";
import bodyParser from "body-parser";
import pgPromise from "pg-promise";
import flash from "express-flash";
import session from "express-session";

const app = express()

app.get("/", async function(req,res){
    res.send("This is a ColorShaper App")
})

const PORT = process.env.PORT || 4000

app.listen(PORT, function(){
    console.log('App starting on port', PORT);
})