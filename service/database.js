export default function colorShaper(db){

    async function easyQuestions(){
        return await db.manyOrNone(`SELECT * FROM questions WHERE game_level = easy`)
    }

    async function mediumQuestions(){
        return await db.manyOrNone(`SELECT * FROM questions WHERE game_level = medium`)
    }
    
    async function hardQuestions(){
        return await db.manyOrNone(`SELECT * FROM questions WHERE game_level = hard`)
    }

    return{
        easyQuestions,
        mediumQuestions,
        hardQuestions

    }
}