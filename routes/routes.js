export default function routes(color){

    const usedQuestions = [];

    async function home (req,res){
        try {

            const player_name = req.body.playerName
            req.session.playerName = player_name;
            console.log (player_name)

            if (player_name === '') {
                req.flash('error', 'Please enter your name');
                res.redirect('/');
            } else {
                res.redirect('game',);
            }

        } catch (error) {
             console.log(error)
        }
     }
     async function gamePlay(req, res) {
        try {

            const playerName = req.session.playerName
            
            const easyQuestions = await color.easyQuestions();
           
    
            // Check if all questions have been used
            if (usedQuestions.length === easyQuestions.length) {
                // If all questions have been used, reset the usedQuestions array
                usedQuestions.length = 0;
            }
    
            // Get a random question that hasn't been used
            let randomQuestion;
            do {
                randomQuestion = easyQuestions[Math.floor(Math.random() * easyQuestions.length)];
            } while (usedQuestions.includes(randomQuestion));
    
            // Mark the question as used
            usedQuestions.push(randomQuestion);

            //levels array
            
            let levels = await color.gameLevels();
          
           ;
            res.render('game', {
                gameStart: true,
                currentLevel: 'easy',
                score: 10,
                randomQuestion,
                playerName,
                levels
            });
        } catch (error) {
            console.log(error);
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