const StoreModel = require("../../schemas/Store");
const sendError = (status, msg) => ({
  status,
  msg,
});

module.exports = ({user,body},{ userId }) =>
  new Promise(async (resolve, reject) => {
    try {


       const {
            latitude,
            longitude,
        }=body


        if(!latitude || !longitude)
        {
            return reject(sendError(0,"Location Cordinates Are required"))
        }

      if (!userId) {
        return reject(sendError(0, "Vendor Id Required"));
      }

      if(user._id.toString()!=userId.toString())
      {
          return reject(sendError(0,"You are not allowed to perform this action"))
      }

      const stores = await StoreModel.find({
        location:
          { $near:
             {
               $geometry: { type: "Point",  coordinates: [ latitude, longitude ] },
               $minDistance: 100,
               $maxDistance: 30000,
             }
          }
      });

      if(!stores)
      {
          return reject(sendError(0,"can't find any store near you"));
      }
      resolve({ status: 1, data: stores });
    } catch (error) {
      console.log(error);
      return reject(sendError(0, "Something Went Wrong"));
    }
  });
