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
             const allQuestions = await color.questions()
             const randomQuestion = allQuestions[Math.floor(Math.random() * allQuestions.length)];
             console.log(randomQuestion)
             res.render('game',{
                gameStart: true,
                currentLevel: 'easy',
                score: 10,
                randomQuestion
            })
             //Because 'length' starts at 1, I think we need to subtract 1 right at the end of this line so as to accommodate the question in index 0
             const randomQuestion = allQuestions[Math.floor(Math.random() * allQuestions.length)]; 
             

             res.render('game',{randomQuestion})

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