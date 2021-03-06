const { StoreModel } = require("../model");

module.exports = {
  createStore: (req, res) => {
    const { vendor } = req.params;
    StoreModel.StoresCreateStoreService(req, vendor)
      .then((success) => {
        res.json(success);
      })
      .catch((err) => res.json(err));
  },

  deleteStore: (req, res) => {
    StoreModel.StoresDeleteStoreService(req.params, req)
      .then((success) => {
        res.json(success);
      })
      .catch((err) => res.json(err));
  },

  updateStore: (req, res) => {
    StoreModel.StoresUpdateStoreService(req, req.params)
      .then((success) => {
        res.json(success);
      })
      .catch((err) => res.json(err));
  },

  getStoresforVendor: (req, res) => {
    StoreModel.StoresGetStoreForVendorService(req,req.params)
      .then((success) => {
        res.json(success);
      })
      .catch((err) => res.json(err));
  },
  getAllOffers:(req,res)=>{
    StoreModel.StoreGetAllOffersService(req.params).then((success)=>{
      res.json(success);
  }).catch((err)=>{
    res.json(err)

  });
  },
  getStore:(req,res)=>{
    StoreModel.StoreGetStoreService(req.params).then((success)=>{
      res.json(success);
  }).catch((err)=>{
    res.json(err)

  });
 },
 getStoresNearUser:(req,res)=>{


  StoreModel.StoreGetStoresNearUserService(req, req.params).then((success)=>{
    res.json(success);
}).catch((err)=>{
  res.json(err)

});

 },

 getAllReuseUsers:(req,res)=>{

  StoreModel.StoreGetAllReuseUsersService(req,req.params).then((success)=>{
   res.json(success)
  }).catch((err)=>{
    res.json(err)
  })
 }


};
