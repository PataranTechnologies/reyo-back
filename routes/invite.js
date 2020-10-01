const {InviteControllers}=require('../controllers')
const { UserControllers } = require("../controllers");
const prefix = "/api/invite/";
module.exports=(app)=>{

    app.post(
    `${prefix}sendInvitation/:userId`,

    UserControllers.isSignedIn,
    UserControllers.loadUser,
    InviteControllers.sendInvitation,


    );

    


}