
const {OfferModel}=require('../model')

module.exports={

    createOffer:(req,res)=>{
        OfferModel.OfferCreateOfferService(req,req.params).then((success)=>{
            res.json(success);
        }).catch((err)=>{res.json(err)})
    },
    deleteOffer:(req,res)=>{
        OfferModel.OfferDeleteOfferService(req.params,req).then((success)=>{
            res.json(success)

        }).catch((err)=>{res.json(err)})
    },
    editOffer:(req,res)=>{
        OfferModel.OfferEditOfferService(req,req.params).then((success)=>{
            res.json(success)

        }).catch((err)=>{res.json(err)})
    },
}
