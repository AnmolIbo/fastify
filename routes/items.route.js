const items =require("../items")
// options to get all the items;
const {getItems,getItem,postItem} =require("../controllers/itemController")
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
const postItemOpts ={
    schema:{
        body:{
            type:"object",
            required:["name"],
            properties:{
                name:{type:"string"}
            }
        },
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
    handler:postItem
    
}

function itemRoutes(fastify,options,done){
    fastify.get("/items",getItemsOpts);

fastify.get("/items/:id",getItemOpts);
fastify.post("/items",postItemOpts)
done();
}
module.exports = itemRoutes;