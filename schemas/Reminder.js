const Mongoose=require("mongoose")

const database=require('../db')

const ReminderSchema=new Mongoose.Schema({

    date:{type:Date},
    hour:{
        type:Number,
        required:true,
    },
    minute:{
        type:Number,
        required:true,
    },
    howOften:{
        type:String,
        required:true,
    },
    user:{
        type:Mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },




}, { timestamps: true })

module.exports=database.model("Reminder",ReminderSchema)