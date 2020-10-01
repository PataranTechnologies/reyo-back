const {InviteModel}=require('../model')

module.exports={

    sendInvitation:(req,res)=>{

        InviteModel.InviteSendInvitationService(req,req.params).then((succcess)=>{
            res.json(succcess)
        }).catch((error)=>{
            res.json(error)
        })
    }

}