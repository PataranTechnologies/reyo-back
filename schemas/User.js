const mongoose = require("mongoose");
const { v4 } = require("uuid");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");
const database = require("../db");
const { JWT_SECRET, JWT_EXPIRE } = require("../constants");

const userSchema = new mongoose.Schema(
  {
    firstname: {
      type: String,
      required: [true, "Please add your first name"],
      trim: true,
    },
    lastName: {
      type: String,
      trim: true,
    },
    email: {
      type: String,
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Please add a valid email",
      ],
      required: [true, "Please add an email"],
      unique: true,
    },
    device: {
      type: String,
      
    },
    age: {
      type: Number,
      
    },
    signInType:{
type:String,
default:'local',
    },
    password: {
      type: String,
      
    },
    salt: {
      type: String,
      
    },
    verificationToken: {
      type: String,
      default: null,
    },
    resetPasswordToken: {
      type: String,
      default: null,
    },
    resetPasswordTokenDate:{
type:Number,
    },
    invited: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Invitation",
      },
    ],
    resusePoints: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "ReusePoints",
      },
    ],

    isVerified: {
      type: Boolean,
      default: false,
    },
    updatedOn: {
      type:Number,
      default:new Date(),
  
    },
    createdOn:{
      type:Number,
      default:new Date(),
    },
    emailTokenDate:{
      type:Number,
      default:new Date(),
    },
    blocked:{
      type:Boolean,
      default:false,
    },
    deleted:{
      type:Boolean,
      default:false,
    }

  },
  
  { timestamps: true }
);



userSchema.methods = {
 
  authenticate: function (plainpassword) {
    var pass=this.securePassword(plainpassword);
    var decipher = crypto.createDecipher('aes-256-ctr',this.salt);
    var dec = decipher.update(pass,'hex','utf8')
  dec += decipher.final('utf8');
  console.log(dec)
    console.log(pass+"   "+this.password+"  ")
    return this.securePassword(plainpassword) === this.password;
  },
  securePasswords:function (pass) {
    this.salt = v4();
    let password = this.securePassword(pass);
    return password
  },
  securePassword: function (plainpassword) {
    try {

      console.log(plainpassword);
      var cipher = crypto.createCipher('aes-256-ctr',this.salt)
      var crypted = cipher.update(plainpassword,'utf8','hex')
    crypted += cipher.final('hex');
      return crypted
        
    } catch (error) {
      console.log(error);
      return "";
    }
  },
  getToken: function (user) {
    return jwt.sign({ id: this._id }, JWT_SECRET, {
      expiresIn: JWT_EXPIRE,
    });
  },
  getResetPasswordToken: function () {
    // Generate token
    const resetToken = crypto.randomBytes(20).toString("hex");

    this.resetPasswordToken = resetToken;

    return resetToken;
  },

  getVerificationToken: function () {
    // Generate token
    const verificationToken = crypto.randomBytes(20).toString("hex");

    this.verificationToken = verificationToken;

    return verificationToken;
  },
};

module.exports = database.model("User", userSchema);
