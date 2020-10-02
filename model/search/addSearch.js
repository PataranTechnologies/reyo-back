const SearchModel=require('../../schemas/Search')

const sendError=(status,msg)=>({
    status,msg
})


module.exports=({user,body})=>new Promise(async (resolve,reject)=>{

try{
    const {

        search,
        role,

    }=body

    if(!search || !role)
    {
        return reject(sendError(0,"All fields are required"));
    }

    let data={
        search,
        role,
    }
    if(role==="User" || role==="Vendor")
    {
        data['user']=user._id;
    }
    data["date"]=new Date();

    const searched=SearchModel.create(data);

    if(!searched)
    {
        return reject(sendError(0,"Unable to add search to db"))

    }

    resolve({status:1,msg:'Search added to db'});
}catch(error)
{
    return reject(sendError(0,"Unable to add search to db"))

    
}
})
