const {OfferControllers}=require('../controllers')
const { UserControllers } = require("../controllers");
const prefix = "/api/offer/";
module.exports=(app)=>{

    app.post(
    `${prefix}create/:vendorId/:storeId`,
    UserControllers.authenticateJWT,
    UserControllers.isSignedIn,
    UserControllers.loadVendor,
    OfferControllers.createOffer,


    );

    app.delete(
       `${prefix}delete/:vendorId/:storeId/:offerId`,
       UserControllers.authenticateJWT,
       UserControllers.isSignedIn,
       UserControllers.loadVendor,
       OfferControllers.deleteOffer
    );

    app.put(
        `${prefix}update/:vendorId/:storeId/:offerId`,
        UserControllers.authenticateJWT,
        UserControllers.isSignedIn,
        UserControllers.loadVendor,
        OfferControllers.editOffer,
    );


}