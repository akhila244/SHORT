let mongodb = require("mongodb");
let talentsprint = mongodb.MongoClient;

let register  = require("express").Router().post("/",(req,res)=>{
        talentsprint.connect("mongodb://localhost:27017/netflix",(err,db)=>
        {
            if(err)
                throw err;
            else{
    db.collection("user").insertOne({"sname":req.body.sname,"email":req.body.email,"password":req.body.password},
                (err, result)=> {
                    if (err) throw err;
                    res.send({message:"1 document inserted"});
                    db.close();
                  });
                }
            });
        });
module.exports = register;
