const ReusePointsModel=require('../../schemas/ReusePoints')

module.exports=(storeId)=>new Promise(async (resolve,reject)=>{

try{
    const reuese=await ReusePointsModel.find({"store":storeId});

    if(!reuese)
    {
        return resolve(0);
    }

    let totalPoints=0;

    reuese.forEach((point)=>{
        totalPoints+=point.resusePoints;
    })

    resolve(totalPoints)

}
catch
{
    resolve(0);

}
})