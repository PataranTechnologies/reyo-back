const {ContactUsControllers}=require('../controllers')
const { UserControllers } = require("../controllers");
const prefix = "/api/contactUs/";
module.exports=(app)=>{


    app.post(
        `${prefix}:userId/`,
        UserControllers.isSignedIn,
        UserControllers.loadUser,
        ContactUsControllers.contactAdmim,
        );
    

}