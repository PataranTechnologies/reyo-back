const mongoose = require("mongoose");
const database = require("../db");

const offerSchema = new mongoose.Schema(
  {
    store: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Store",
      required:true,
    },
    name: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    webpage:{
      type:String,
    },
    offerImage: {
      type: String,
    },
    termsAndValidity: [
      {
        type: String,
        required: true,
      },
    ],
    start:{
      type:Date,
    },
    end:{
      type:Date,
    }
  },
  { timestamps: true }
);

module.exports = database.model("Offer", offerSchema);
