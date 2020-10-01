const mongoose = require("mongoose");
const database = require("../db");

const InviteSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["friend", "vendor"],
    },
    description:{

        type:String,
        
    },
    isAccepted: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = database.model("Invite", InviteSchema);
