const OfferModel = require("../../schemas/Offer");
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

      const offers = await OfferModel.find({ store: storeId });

      resolve({ status: 1, data: offers });
    } catch (error) {
      console.log(error);
      return reject(sendError(0, "Something Went Wrong"));
    }
  });
