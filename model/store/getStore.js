const StoreModel = require("../../schemas/Store");
const sendError = (status, msg) => ({
  status,
  msg,
});

module.exports = ({ storeId }) =>
  new Promise(async (resolve, reject) => {
    try {
      if (!storeId) {
        return reject(sendError(0, "Store Id Required"));
      }

      const store = await StoreModel.findOne({ _id: storeId });

      resolve({ status: 1, data: store });
    } catch (error) {
      console.log(error);
      return reject(sendError(0, "Something Went Wrong"));
    }
  });
