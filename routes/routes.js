export default function routes(color){

    async function home (req,res){
        try {

            const player_name = req.body.playerName
            console.log (player_name)

            if (player_name === '') {
                req.flash('error', 'Please enter a name');
                res.redirect('/');
            } else {
                res.redirect('game',);
            }

        } catch (error) {
             console.log(error)
        }
     }

    async function gamePlay (req,res){
        try {
             const easyQuestions = await color.easyQuestions()
             const randomQuestion = easyQuestions[Math.floor(Math.random() * easyQuestions.length - 1)];
             console.log(randomQuestion)
             res.render('game',{
                gameStart: true,
                currentLevel: 'easy',   // Devan Commented: this needs to return from the all questions I guess
                score: 10,              // Devan Commented: this will have to be returned from the user profile
                randomQuestion
            })

        } catch (error) {
            console.log(error)
        }
        
    }

    async function settings(req,res){

    

        res.render("settings");    

    }


    async function startGame(req,res){


    }
   

    return{
        home,
        settings,
        startGame,
        gamePlay
       
    }
}