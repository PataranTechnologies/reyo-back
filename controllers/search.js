const {SearchModel}=require('../model')

module.exports={

    addSearch:(req,res)=>{

        SearchModel.SearchAddSearchService(req).then((succcess)=>{
            res.json(succcess)
        }).catch((error)=>{
            res.json(error)
        })
    }

}