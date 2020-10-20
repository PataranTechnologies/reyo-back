const UserModel = require("../../schemas/User");
const { HOST } = require("../../constants");
const Client =require('../../redis')
// Send Error Response to user
const sendError = (status, msg) => ({
  status,
  msg,
});

module.exports = ({
  firstname,
  lastName,
  password,
  confirmPassword,
  age,
  email,
  device,
}) =>
  new Promise(async (resolve, reject) => {
    try {
      // Check if any required field is not present in req
      if (!firstname || !email || !password || !confirmPassword || !age) {
        return reject(
          sendError(0, "Please fill all the required fields" )
        );
      }

      // Check if passwords are not eqaul
      if (!(password === confirmPassword)) {
        return reject(sendError(0, "Password doesn't match"));
      }
      let user=null;
      //user= await Client.getAsync(email);

     // if(!user)
    //  {
        user= await UserModel.findOne({ email });

    //    if(user) Client.setex(email,3600,{...user,password:'',salt:''});
    //  }

      console.log(user)
      // Check if user's email is already registered
      if (user) {
        return reject(sendError(0, { msg: "Email already registered" }));
      }

      let newUser = {
        firstname,
        email,
        password,
        age,
      };

      if (!!lastName) newUser["lastName"] = lastName;

      if (!!device) newUser["device"] = device;

      
      user = new UserModel(newUser);
      user.password=user.securePasswords(password);
      // Check is user could not be created
      if (!user) {
        return reject(sendError(0, { msg: "User could not be created" }));
      }

      let verificationToken = user.getVerificationToken();
      user["emailTokenDate"]=new Date();
      user["createdOn"]=new Date();
      await user.save({ validateBeforeSave: false });
    
      console.log(user)

      const tokenVerificationLink = `<a href="${HOST}/api/user/email/verify?token=${verificationToken}&id=${user._id}&role=user">Click Here To Verify Your account</a>`;

      let emailData = {
        email,
        link: tokenVerificationLink,
        msg: "Please visit this link to verify your email",
        subject: "Reyo - Email Verification",
        ackMsg: "Email verification link has been send to your email",
      };

      resolve(emailData);
    } catch (error) {
      console.log(error);
      return reject(sendError(0, "Something went wrong"));
    }
  });
