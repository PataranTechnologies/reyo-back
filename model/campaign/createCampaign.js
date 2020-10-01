const CanpaignModel = require("../../schemas/Campaign");

const sendError = (status, msg) => ({
  status,
  msg,
});

module.exports = ({ user, body }, {vendorId}) =>
  new Promise(async (resolve, reject) => {
    try {
      let {

        storeId,
        description,
        numberOfAdvertisements,
        startDate,
        startTime,
        endDate,endTime,
        distance,
        paymentTransactionId,

      } = body;

      if (
        (!storeId,
        !numberOfAdvertisements,
        !description,
        !startDate,
        !startTime,
        !endDate,
        !endTime,
        !distance,
        !paymentTransactionId
        )
      ) {
        return reject(sendError(0, "Please fill all the required details"));
      }

      if (vendorId.toString() !== user._id.toString()) {
        return reject(
          sendError(0, "You are not allowed to perform this action")
        );
      }

      let data = {
        storeId,
        description,
        numberOfAdvertisements,
        startDate,
        startTime,
        endDate,endTime,
        distance,
        paymentTransactionId, 
      };

    
      const campaign = await CanpaignModel.create(data);

      if (!campaign) {
        reject(sendError(0, "Something Went wrong"));
      }

      resolve({ status: 1, msg: "Campaign Created" });
    } catch (error) {
      console.log(error);
      return reject(sendError(0, "Something Went Wrong"));
    }
  });
