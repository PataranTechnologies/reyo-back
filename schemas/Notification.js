const Mongoose=require('mongoose')
const database=require('../db')
NotificationSchema   = new Mongoose.Schema({
    sender: {type:mongoose.Schema.Types.ObjectId, refPath:'role'}, 
    receiver: [{type:mongoose.Schema.Types.ObjectId, refPath:'role'}], 
    message: {
        type:String,

    },
    role:{
        type:String,
        enum:['User','Vendor']
    }, 
    read_by:[{
     readerId:{type:mongoose.Schema.Types.ObjectId, refPath:'readerRole'},
     readerRole: {type:String},
     read_at:{type:Date,default:Date.now}
    }],
    created_at:{type: Date, default: Date.now},
    
});