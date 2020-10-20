const Mongoose=require('mongoose')
const database=require('../db')
const SearchSchema=Mongoose.Schema({

    search:{
        type:String,
        required:true,
    },
    date:{
        type:Date,
        required:true,
    },

    role:{
        type:String,
        required:true,
    },
    user:{
        type:Mongoose.Schema.Types.ObjectId,
        refPath:'role',
    }



},
{timestamp:true}
)

module.exports=database.model("Search",SearchSchema)