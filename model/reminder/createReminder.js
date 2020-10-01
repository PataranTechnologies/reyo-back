const ReminderModel= require('../../schemas/Reminder')

const sendError=(status,msg)=>({
status,
msg,
})


module.exports=({user,body},{userId})=>new Promise(async (resolve,reject)=>{
try{
    let {
        hour,
        minute,
        howOften,
        date,

    


    }=body


    if(user_id.toString()!==userId.toString())
    {
        return reject(sendError(0,"You are not allowed to perform this action"))
    }

    const data={
        hour,
        minute,
        howOften,
        date,
        user:userId,

    }

    const reminder= await ReminderModel.create(data);

    if(!reminder)
    {
        return reject(sendError(0,"Unable to set a Reminder"))
    }

    resolve({status:1,msg:'Reminder has successfully set'});
}catch(err)
{
    reject(sendError(0,err));
}
})