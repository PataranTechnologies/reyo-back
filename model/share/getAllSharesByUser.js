const ShareModel = require("../../schemas/Share");
const sendError = (status, msg) => ({
  status,
  msg,
});

module.exports = ({ userId }) =>
  new Promise(async (resolve, reject) => {
    try {
      if (!userId) {
        return reject(sendError(0, "User ID Required"));
      }

      const shares = await ShareModel.find({ user: userId });

      resolve({ status: 1, data: shares });
    } catch (error) {
      console.log(error);
      return reject(sendError(0, "Something Went Wrong"));
    }
  });
