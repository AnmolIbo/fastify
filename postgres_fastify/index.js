const fastify =require('fastify')({logger:false});
// fastify.register(require('@fastify/postgres'),{
//     connectionString:'postgres://postgres@localhost/todo_database'
// })c
const {Client } =require("pg");
const client =new Client ({
    user:"postgres",
    password:"123456",
    database:"todo_database",
    host:"localhost",
    port:5432
})
client.connect();

fastify.get("/todos",async (req,reply)=>{
    
    try{
        const alltodos =await client.query("SELECT * FROM todo")
        return alltodos.rows
    }catch(err){
        return ({"err":err})
    }
})
fastify.post("/todos",async(req,res)=>{
    try{
        
        const {description } =req.body;
        const newtodo =await client.query(
            "INSERT INTO todo (description) VALUES ($1) RETURNING *",
            [description]
        )
        return newtodo.rows[0]
      
    }catch(err){
        console.log(err.message)
    }
})
fastify.listen(3000,()=>{
console.log("istening on port 3000 ...")
})