const UserModel = require("../../schemas/User");
const VendorModel = require("../../schemas/Vendor");
const Client =require('../../redis');
const { json } = require("body-parser");
// Get Signed Token
const sendToken = (user, role) => {
  const token = user.getToken();
  return {
    status: 1,
    id: user._id,
    email: user.email,
    name: user.firstname,
    token,
    role,
    user:{...user,password:'********',salt:'********'}
  };
};

// Send Error Response to user
const sendError = (status, msg) => ({
  status,
  msg,
});

module.exports = ({ email, password, role }) =>
  new Promise(async (resolve, reject) => {
    try {
      // Check if any required field is not present in req
      if (!email || !password || !role) {
        return reject(sendError(0, "Please provide all required details"));
      }

      let Model = role === "vendor" ? VendorModel : UserModel;
      let user=null;
    //  user=await Client.getAsync(email);
     
    
    //  if(!user)
    //  {
        user= await Model.findOne({ email });



    //    if(user) Client.setex(email,3600,JSON.stringify({...user,password:'',salt:''}));
     
    //  }
      // Check if user's email is already registered
     
      if (!user) {
        return reject(sendError(0, "Email is not registered"));
      }
   //   user=Object.assign(new Model({}), JSON.parse(user))
      console.log(user)

       
      if (!user.authenticate(password)) {
        return reject(sendError(0, "Password is not valid"));
      }

      // Send Success Response
      return resolve({status:1,data:sendToken(user, role)});
    } catch (error) {
      console.log(error);
      return reject({ msg: "Something went wrong", status: 0 });
    }
  });
