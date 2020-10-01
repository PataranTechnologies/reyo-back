const {ContactUsModel}=require('../model')

module.exports={

    contactAdmin:(req,res)=>{

        ContactUsModel.ContactUsContactAdminService(req).then((succcess)=>{
            res.json(succcess)
        }).catch((error)=>{
            res.json(error)
        })
    }

}