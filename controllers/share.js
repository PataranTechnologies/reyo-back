const {ShareModel}=require('../model')

module.exports={

    getAllSharesByUser:(req,res)=>{


        ShareModel.ShareGetAllSharesByUserService(req.params).then((success)=>{

            res.json(success)

        }).catch((err)=>{
            res.json(err);
        })

    },
    shareOnSn:(req,res)=>{

        ShareModel.ShareShareOnSnService(req,req,params).then((success)=>{
            res.json(success);
        }).catch((err)=>{

            res.json(err)
        })

    },

}