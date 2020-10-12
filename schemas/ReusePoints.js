const mongoose = require("mongoose");
const database = require("../db");

const reusePointsSchema = new mongoose.Schema(
  {
    user:{
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    
    },
    store: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Store",
    },
    resusePoints: {
      type: Number,
      default: 0,
    },
    reuseType:{
      type:String,
      
    }
  },
  { timestamps: true }
);

module.exports = database.model("ResusePoint", reusePontsSchema);
