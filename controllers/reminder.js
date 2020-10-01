const {ReminderModel} =require('../model')


module.exports={

    createReminder:(req,res)=>{

        ReminderModel.ReminderCreateReminderService(req,req.params).then((succcess)=>{
            res.json(succcess)
        }).catch((error)=>{
            res.json(error)
        })

    },
    deleteReminder:(req,res)=>{
        ReminderModel.ReminderDeleteReminderService(req.params,req).then((succcess)=>{
            res.json(succcess)
        }).catch((error)=>{
            res.json(error)
        })
    },
    getAllRemainder:(req,res)=>{}
}