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
});
fastify.get("/todos/:id",async (req,reply)=>{
    const id =req.params.id;
    const todo = await client.query("SELECT * FROM todo WHERE todo_id=$1",[id]);
    reply.send(todo.rows)
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
fastify.put("/todos/:id",async (req,reply)=>{
    try{
        const {id} =req.params;
        const {description} =req.body;
        const updatedTodo =client.query("UPDATE todo SET description = $1 WHERE todo_id=$2 ",[description,id]);
        return updatedTodo.rows
    }catch(err){
        console.log(err.message);
    }
});
fastify.delete("/todos/:id",async(req,reply)=>{
    try{
        const {id}= req.params;
        const deleteTodo =client.query("DELETE FROM todo WHERE todo_id =$1",[id]);
        reply.send(deleteTodo)
    }catch(err){
        console.error(err)
    }
})
fastify.listen(3000,()=>{
console.log("istening on port 3000 ...")
})