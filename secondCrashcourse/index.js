const fastify =require("fastify")({logger:true});

fastify.get("/",async function (req,reply){
return {hello:"world"}
})
const start =async () =>{
    try{
        await fastify.listen(3001,()=>{
            console.log("server is litening on port 3001")
        });

    }catch(err){
        fastify.log.error(err);
        process.exit(1);
    }
}
start();