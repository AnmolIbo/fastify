const { res } = require('pino-std-serializers');

const fastify =require('fastify')({logger:true});
const PORT = process.env.PORT||5000;
fastify.register(require("./routes/items.route"))

const start =async ()=>{
try{
    await fastify.listen(PORT,()=>{console.log("listening on port "+PORT)})
}catch(error){
    fastify.log(error);
    process.exit(1)
}
}
start();