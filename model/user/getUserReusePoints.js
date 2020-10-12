const ReusePointsModel=require('../../schemas/ReusePoints')
const sendError=(status,msg)=>{
status,msg
}
module.exports=({user},{userId})=>new Promise(async (resolve,reject)=>{
    try{


        if(!userId)
        {
            return reject(sendError(0,"UserID Required"))
        }
        if(userId!==user.id)
        {
            return reject(sendError(0,"Youn are not allowed to perform this action"))
        }
        
        const reuses=await ReusePointsModel.find({user:userId});
        if(!reuses)
        {
            resolve({status:1,reusePoints:0})
        }

        resolve({status:1,reusePoints:reuses.length});


    }
    catch{

        return reject(sendError(0,"can't fetch reuse point"));
    }
})
