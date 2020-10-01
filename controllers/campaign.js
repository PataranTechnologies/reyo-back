const {CampaignModel}=require('../model')

module.exports={

    createCampaign:(req,res)=>{

        CampaignModel.CampaignCreateCampaignService(req,req.params).then((succcess)=>{
            res.json(succcess)
        }).catch((error)=>{
            res.json(error)
        })
    }

}