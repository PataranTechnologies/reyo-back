const OfferModel=require('../../schemas/Offer')

const sendError=(status,msg)=>({
status,
msg
})

module.exports=({user,body},{vendorId,StoreId,OfferId})=>new Promise(async (resolve,reject)=>{


    try{


    if(vendorId.toString()!==user._id.toString())
    {
       return reject(sendError(0,"You are not allowd to perform this operation"))
    }

    await OfferModel.findByIdAndUpdate(OfferId,body,{
        runValidators: true,
      });

      resolve({status:1,msg:'Offer Successfully activated'})

}
catch(error)
{

    return reject(sendError(0,error.toString()));

}


    

})