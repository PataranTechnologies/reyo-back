const OfferModel = require("../../schemas/Offer");
const StoreModel=require('../../schemas/Store')
const sendError = (status, msg) => ({
  status,
  msg,
});

module.exports = ({ user, body },{vendorId,storeId}) =>
  new Promise(async (resolve, reject) => {
    try {
      let {
        name,
        value,
        description,
        offerImage,
        termsAndValidity,
        start,end,
        webpage,
      } = body;

      if (
        (!name,
        !value,
        !description,
        !offerImage,
        !termsAndValidity,
        !start,
        !end)
      ) {
        return reject(sendError(0, "Please fill all the required details"));
      }

      if (vendorId.toString() !== user._id.toString()) {
        return reject(
          sendError(0, "You are not allowed to perform this action")
        );
      }


      let store= await StoreModel.findOne({_id:storeId})

      if(!store)
      {
          return reject(sendError(0,"The Offer you are tring to create for store does not exist"))
      }
      

      let data = {
        name,
        value,
        description,
        offerImage,
        termsAndValidity,
        start,end,
       
      };

      if (!!webpage) data["webpage"] = webpage;
      
      data["store"] = storeId;

      const offer = await OfferModel.create(data);

      if (!offer) {
        reject(sendError(0, "Offer could not be created"));
      }

      resolve({ status: 1, msg: "Offer Created" });
    } catch (error) {
      console.log(error);
      return reject(sendError(0, "Something Went Wrong"));
    }
  });
