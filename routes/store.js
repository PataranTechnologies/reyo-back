const { UserControllers } = require("../controllers");
const { StoreControllers } = require("../controllers");

const prefix = "/api/store/";

module.exports = (app) => {
  app.post(
    `${prefix}create/:vendor`,
    UserControllers.isSignedIn,
    UserControllers.loadVendor,
    StoreControllers.createStore
  );
  app.delete(
    `${prefix}delete/:vendorId/:storeId`,
    UserControllers.isSignedIn,
    UserControllers.loadVendor,
    StoreControllers.deleteStore
  );
  app.put(
    `${prefix}update/:vendorId/:storeId`,
    UserControllers.isSignedIn,
    UserControllers.loadVendor,
    StoreControllers.updateStore
  );

  app.get(
    `${prefix}get/vendor/:vendorId/`,
    UserControllers.isSignedIn,
    UserControllers.loadVendor,
    StoreControllers.getStoresforVendor
  );

  app.get(
    `${prefix}get/allOffers/:storeId`,
    UserControllers.isSignedIn,
    UserControllers.loadVendor,
    StoreControllers.getAllOffers
  );

  app.get(
    `${prefix}get/:storeId`,
    UserControllers.isSignedIn,
    UserControllers.loadVendor,
    StoreControllers.getStore
  )
};
