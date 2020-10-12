const StoreModel = require("../../schemas/Store");
const getReusePoints=require('./getReusePoint');
const sendError = (status, msg) => ({
  status,
  msg,
});

module.exports = ({user,body},{ vendorId }) =>
  new Promise(async (resolve, reject) => {
    try {
      if (!vendorId) {
        return reject(sendError(0, "Vendor Id Required"));
      }

      if(user.id!==vendorId)
      {
        return reject(sendError(0,'Not Allowed to access store for This vendor'))
      }

      const stores = await StoreModel.find({ vendor: vendorId });

       stores.forEach((store)=>{
             getReusePoints(store.id).then((response)=>{
               store["reusePoints"]=response;
             })
       })

resolve({ status: 1, data: stores });
    } catch (error) {
      console.log(error);
      return reject(sendError(0, "Something Went Wrong"));
    }
  });
