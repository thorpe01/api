const mongoose = require("mongoose");

mongoose
.connect("mongodb+srv://thorpe:kabals!01@cluster0.sq05i.mongodb.net/test",
   {useNewUrlParser : true , useUnifiedTopology : true })
.then(()=>console.log("connected to mongo "))
.catch((err)=>console.log("failed to connect ",err))