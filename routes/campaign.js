const {CampaignControllers}=require('../controllers')
const { UserControllers } = require("../controllers");
const prefix = "/api/campaign/";
module.exports=(app)=>{

    app.post(
    `${prefix}create/:vendorId`,
    UserControllers.authenticateJWT,
    UserControllers.isSignedIn,
    UserControllers.loadVendor,
    CampaignControllers.createCampaign,


    );

    


}