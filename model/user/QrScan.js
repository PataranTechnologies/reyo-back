
const ReusePointsModel=require('../../schemas/ReusePoints')
const sendError = (status, msg) => ({
  status,
  msg,
});

module.exports = ({ user, body }, { storeId }) =>
  new Promise(async (resolve, reject) => {
    try {

if(!storeId)
{
  return reject(sendError(0,"StoreId Required"))
}   

if(!body.reuseType)
{
  return reject(sendError(0,"reuseType Required"))

}

 var start = new Date();
start.setHours(0,0,0,0);

var end = new Date();
end.setHours(23,59,59,999);


var pipeline = 
  {
      
    "createdAt": { "$gte": start, "$lt": end },
     'user':user.id,
      'store':storeId
  },
 

 const vals=await ReusePointsModel.find(pipeline);
 if(vals.length>=3)
 {
   return reject(sendError(0,"You Have Already Reached your limit to claim Reuse point at this Store"));
 }

         const qr={
             user:user.id,
             store:storeId,
             resusePoints:1,
             reuseType:body.reuseType,
         }
         qrReuse=await ReusePointsModel.create(qr);
    
    resolve({ status: 1, msg: "Reuse Point Added Successfuly" });
    } catch (error) {
      console.log(error);
      return reject(sendError(0, "Something Went Wrong"));
    }
  });
