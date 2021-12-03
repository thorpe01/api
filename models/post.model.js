const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema(

{
    posterId:{
        type: String,
        required :true 
    },
    message:{
        type:String ,
        trim: true ,
        
    },
 
},

);
module.exports = mongoose.model("post", PostSchema);