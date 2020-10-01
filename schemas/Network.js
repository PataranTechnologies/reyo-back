const mongoose = require("mongoose");
const database = require("../db");

const NetworkSchema = new mongoose.Schema(
  {
    user:{

        type:mongoose.Schema.Types.ObjectId,
        ref:'User',

    },
    to:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
    },
    

  },
  { timestamps: true }
);

module.exports = database.model("Network", NetworkSchema);
