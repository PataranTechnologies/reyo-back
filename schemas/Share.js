const mongoose=require('mongoose')
const database = require("../db");

const ShareSchema=new  mongoose.Schema({

date:{
    type:Date,

},
description:{
    type:String,
},
role:{
    type: String,
    enum:['User','Vendor']
},
user:{
    type:mongoose.Schema.Types.ObjectId,
     refPath:'role',
     required:true
},
store:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'Store',
    required:true,

},
image:{
    type:String,
    required:true,
},
sharedOn:{
    type:String,
    required:true,
}


}, { timestamps: true })


module.exports=database.model("Share",ShareSchema);