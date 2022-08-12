let items=require("../items");

const { v4: uuidv4 } = require('uuid');
const getItem =(req,reply)=>{
    const {id} =req.params;
  
    const item =items.find((el)=>el.id===+id)
    reply.send(item)

}
const getItems=(req,reply)=>{reply.send(items)};

const postItem =(req,reply)=>{
    const {name}=req.body;
    const item ={
        id:uuidv4(),
        name
    }
items =[...items,item]
reply.code(201).send(items)
}

module.exports ={
    getItems,getItem,postItem
}
