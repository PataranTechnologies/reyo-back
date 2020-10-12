const ReusePointModel=require('../../schemas/ReusePoints')
const UserModel=require('../../schemas/User')
const User = require('../../schemas/User')
const sendError=(status,msg)=>{
    status,
    msg
}

module.exports=({user},{vendorId,storeId})=>new Promise(async (resolve,reject)=>{
try{



    if(!storeId)
    {
        return reject(sendError(0,"storeId Required as params"))
    }

    if(user.id!==vendorId)
    {
       return reject(sendError(0,"You are not allowd to perform this action"))
    }

    const finalList=await ReusePointModel.find({store:storeId})

    finalList.forEach((reuse)=>{

    const user=await UserModel.findById(reuse.user);

    reuse['user']=user.name;
    reuse["email"]=user.email;

    })



    resolve({status:1,data:finalList});



    }
    catch
    {
    return reject(sendError(0,"Unable to fetch reuse List for the store"))
    }
})