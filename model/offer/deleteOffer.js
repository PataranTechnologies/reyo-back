const OfferModel = require("../../schemas/Offer");
const sendError = (status, msg) => ({
  status,
  msg,
});

module.exports = ({ vendorId, storeId,offerId }, { user }) =>
  new Promise(async (resolve, reject) => {
    try {
      if (!vendorId || !offerId) {
        return reject(sendError(0, "Something Went Wrong"));
      }

      if (vendorId.toString() !== user._id.toString()) {
        return reject(
          sendError(0, "You are not allowed to perform this action")
        );
      }

      await OfferModel.findByIdAndDelete(offerId);

      resolve({ status: 1, msg: "Offer Deleted Successfully" });
    } catch (error) {
      console.log(error);
      return reject(sendError(0, "Something Went Wrong"));
    }
  });
