const items =require("../items")
// options to get all the items;
const {getItems,getItem} =require("../controllers/itemController")
const getItemsOpts ={
    schema:{
        response:{
            200:{
                type:"array",
                items:{
                   type:"object",
                    properties:{
                        id:{type:"integer"},
                        name:{type:"string"}
                    }
                }
            }
        }
    },handler:getItems
}

const getItemOpts ={
    schema:{
        response:{
            200:{
                type:"object",
                properties:{
                    id:{type:"string"},
                    name:{type:"string"}
                }
            }
        }
    },
    handler:getItem
    
}


function itemRoutes(fastify,options,done){
    fastify.get("/items",getItemsOpts);

fastify.get("/items/:id",getItemOpts);
done();
}
module.exports = itemRoutes;