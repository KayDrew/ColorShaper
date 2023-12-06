export default function colorShaper(db){

    async function questions(){
        return await db.manyOrNone(`SELECT * FROM questions`)
    }

    return{
        questions
    }
}