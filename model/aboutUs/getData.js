const AboutUsModel=require('../../schemas/AboutUs')
const sendError=(status,msg)=>{
status,
msg
}


module.exports=()=>new Promise(async (resolve,reject)=>{

    const abouts=await AboutUsModel.find({});

    if(!abouts)
    {
        return reject(sendError(0,"Can't find data for the section"))
    }
    resolve({status:1,data:abouts})



})