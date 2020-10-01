const Mongoose=require('mongoose')

const database=require('../db')


const QrcodeSchema=new Mongoose.Schema({

    date:{
        type:Date,
        default:new Date(),
    },
    store:{
        type:Mongoose.Schema.Types.ObjectId,
        ref:'Store',
        required:true,

    },
    code:{
        type:String,
    },
    picture:{type:String},


},
{ timestamps: true })

module.exports=database.model("Qrcode",QrcodeSchema)