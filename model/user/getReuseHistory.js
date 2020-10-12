const ReusePointModel=require('../../schemas/ReusePoints')
const sendError=(status,msg)=>{
    status,
    msg
}

module.exports=({user},{userId})=>new Promise(async (resolve,reject)=>{
try{



    if(!userId)
    {
        return reject(sendError(0,"userId Required as params"))
    }

    if(user.id!==userId)
    {
       return reject(sendError(0,"You are not allowd to perform this action"))
    }

    const finalList=await ReusePointModel.find({store:storeId}).populate('store')

    resolve({status:1,data:finalList});



    }
    catch
    {
    return reject(sendError(0,"Unable to fetch reuse List for the store"))
    }
})