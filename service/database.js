export default function colorShaper(db){

    async function easyQuestions(){

        return await db.manyOrNone(`SELECT * FROM questions WHERE game_level ='easy'`)
    }

    async function mediumQuestions(){
        return await db.manyOrNone(`SELECT * FROM questions WHERE game_level = medium`)
    }
    
    async function hardQuestions(){
        return await db.manyOrNone(`SELECT * FROM questions WHERE game_level = hard`)
    }

    async function gameLevels(){
        let lvls = await db.many(`SELECT game_level FROM questions`);
        
        let levels = [];
        for(let i = 0; i < lvls.length; i++){
            if(!levels.includes(lvls[i].game_level)){
                levels.push(lvls[i].game_level);       
            } 
        }

        return levels;
    }

    return{
        easyQuestions,
        mediumQuestions,
        hardQuestions,
        gameLevels

    }
}