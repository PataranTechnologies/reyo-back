const { UserControllers } = require("../controllers");
const { StoreControllers } = require("../controllers");

const prefix = "/api/store/";

module.exports = (app) => {
  app.post(
    `${prefix}create/:vendor`,
    UserControllers.authenticateJWT,
    UserControllers.isSignedIn,
    UserControllers.loadVendor,
    StoreControllers.createStore
  );
  app.delete(
    `${prefix}delete/:vendorId/:storeId`,
    UserControllers.authenticateJWT,
    UserControllers.isSignedIn,
    UserControllers.loadVendor,
    StoreControllers.deleteStore
  );
  app.put(
    `${prefix}update/:vendorId/:storeId`,
    UserControllers.authenticateJWT,
    UserControllers.isSignedIn,
    UserControllers.loadVendor,
    StoreControllers.updateStore
  );

  app.get(
    `${prefix}get/vendor/:vendorId/`,
    UserControllers.authenticateJWT,
    UserControllers.isSignedIn,
    UserControllers.loadVendor,
    StoreControllers.getStoresforVendor
  );

  app.get(
    `${prefix}get/allOffers/:storeId`,
    UserControllers.authenticateJWT,
    UserControllers.isSignedIn,
    UserControllers.loadVendor,
    StoreControllers.getAllOffers
  );

  app.get(
    `${prefix}get/:storeId`,
    UserControllers.authenticateJWT,
    UserControllers.isSignedIn,
    UserControllers.loadVendor,
    StoreControllers.getStore
  );

  app.get(
    `${prefix}get/near/:userId/`,
    UserControllers.isSignedIn,
    UserControllers.loadUser,
    StoreControllers.getStoresNearUser
  );
  app.get(
    `${prefix}get/allReuseUsers/:storeId`,
    UserControllers.authenticateJWT,
    UserControllers.isSignedIn,
    UserControllers.loadVendor,
    StoreControllers.getAllReuseUsers,
  )

};
