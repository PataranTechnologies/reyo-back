const mongoose = require("mongoose");
const database = require("../db");

const AboutUsSchema = new mongoose.Schema(
  {
   
    date:{
        type:Date,

    },
    data:{
        type:String,
        required:true,
    }

  },
  { timestamps: true }
);

module.exports = database.model("AboutUs", AboutUsSchema);
