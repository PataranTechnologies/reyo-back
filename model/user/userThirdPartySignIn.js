const UserModel = require("../../schemas/User");
const VendorModel = require("../../schemas/Vendor");
const Client =require('../../redis')

const { HOST } = require("../../constants");
const sendToken = (user, role) => {
    const token = user.getToken();
    return {
      status: 1,
      id: user._id,
      email: user.email,
      name: user.firstname,
      token,
      role,
    };
  };
// Send Error Response to user
const sendError = (status, msg) => ({
  status,
  msg,
});

module.exports = ({
  firstname,
  lastName,
  email,
  device,
  signInType,
  role,
}) =>
  new Promise(async (resolve, reject) => {
    try {
      // Check if any required field is not present in req
      if (!firstname || !email || !signInType ||role) {
        return reject(
          sendError(0, "Please fill all the required fields" )
        );
      }

      let Model = role === "vendor" ? VendorModel : UserModel;
      let user=null;
     // user= await Client.get(email);

  //    if(!user)
  //    {
        user= await Model.findOne({ email });
         
  //      if(user) Client.setex(email,3600,{...user,password:'',salt:''});
 //     }

      // Check if user's email is already registered
      if (user) {
        return resolve({status:1,data:sendToken(user, "user")});
      }

      let newUser = {
        firstname,
        email,
        signInType,
      };

      if (!!lastName) newUser["lastName"] = lastName;

      if (!!device) newUser["device"] = device;

      user = new Model(newUser);

      // Check is user could not be created
      if (!user) {
        return reject(sendError(0, { msg: "User could not be created" }));
      }

      user["createdOn"]=new Date();
      await user.save();


   


      console.log(user)

     
      resolve({status:1,data:sendToken(user, "user")});
    } catch (error) {
      console.log(error);
      return reject(sendError(0, "Something went wrong"));
    }
  });
