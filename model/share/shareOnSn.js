const ShareModel = require("../../schemas/Share");
const sendError = (status, msg) => ({
  status,
  msg,
});

module.exports = ({ user, body }, {userId}) =>
  new Promise(async (resolve, reject) => {
    try {
      let {

        description,
        storeId,
        image,
        sharedOn,
        role,


      } = body;

      if (
        (
        !description,
        !storeId,
        !image,
        !sharedOn,
        !role
        )
      ) {
        return reject(sendError(0, "Please fill all the required details"));
      }

      if (userId.toString() !== user._id.toString()) {
        return reject(
          sendError(0, "You are not allowed to perform this action")
        );
      }

      let data = {
        user:userId,
        description,
        store:storeId,
        image,
        sharedOn,
        date:new Date(),
        role,

      };

    


      const share = await ShareModel.create(data);

      if (!share) {
        reject(sendError(0, "Cannot share on social media"));
      }

      resolve({ status: 1, msg: "Data Shared" });
    } catch (error) {
      console.log(error);
      return reject(sendError(0, "Something Went Wrong"));
    }
  });
