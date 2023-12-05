export default function routes(){


    function settings(req,res){

    

        res.render("settings");    

    }


    async function startGame(req,res){


    }

    return{
        settings,
        startGame,
       
    }
}