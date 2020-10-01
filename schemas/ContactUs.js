const mongoose = require("mongoose");
const database = require("../db");

const ContactUsSchema = new mongoose.Schema(
  {
    user:{

        type:mongoose.Schema.Types.ObjectId,
        ref:'User',

    },
    companyName:{
        type:String,
        required:true,
    },
    firstName:{
        type:String,
        required:true,
    },
    lastName:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    alreadySignedIn:{
        type:Boolean,
    },
    Question:{
        type:String,require:true
    }
    

  },
  { timestamps: true }
);

module.exports = database.model("ContactUs", ContactUsSchema);
