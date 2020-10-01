const {AboutUsModel}=require('../model')

module.exports={

    getData:(req,res)=>{

        AboutUsModel.AboutUsGetDataService().then((success)=>{
            res.json(success)
        }).catch((err)=>{
            res.json(err);
        })

    },

}