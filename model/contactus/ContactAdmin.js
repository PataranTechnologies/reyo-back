const ContactUsModel = require("../../schemas/ContactUs");
const sendError = (status, msg) => ({
  status,
  msg,
});

module.exports = ({ user, body }) =>
  new Promise(async (resolve, reject) => {
    try {
      let {
          companyName,
          firstName,
          lastName,
          email,
          question,
          alreadySignedIn,
      } = body;

      if (
        (!companyName,
        !firstName,
        !lastName,
        !email,
        !question
        )
      ) {
        return reject(sendError(0, "Please fill all the required details"));
      }

     
    
      let data = {
    
        companyName,
        firstName,
        lastName,
        email,
        question,
    
    };

      if (!!alreadySignedIn) data["alreadySingedin"] = alreadySignedIn;
      data['user']=user._id;

      const contactObj = await ContactUsModel.create(data);

      if (!contactObj) {
        reject(sendError(0, "Contact with admin was not completed "));
      }

      resolve({ status: 1, msg: "success" });
    } catch (error) {
      console.log(error);
      return reject(sendError(0, "Something Went Wrong"));
    }
  });
