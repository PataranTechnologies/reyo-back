const Mongoose=require('mongoose')
const database=require('../db')
const CitySchema=Mongoose.Schema({

    cityName:{
        type:String,
        required:true,
    },
    createdOn:{type:Date},
    updatedOn:{type:Date},
    user:{
        type:Mongoose.Schema.Types.ObjectId,
        ref='User',
        required:true,
    }



},
{timestamp:true}
)

module.exports=database.model("City",CitySchema)