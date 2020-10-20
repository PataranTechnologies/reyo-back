const {ShareControllers}=require('../controllers')
const { UserControllers } = require("../controllers");
const prefix = "/api/share/";
module.exports=(app)=>{

    app.post(
    `${prefix}post/OnSn/:userId`,
    UserControllers.authenticateJWT,
    UserControllers.isSignedIn,
    UserControllers.loadUser,
    ShareControllers.shareOnSn,


    );

    app.get(
        `${prefix}get/:userId`,
        UserControllers.authenticateJWT,
        UserControllers.isSignedIn,
        UserControllers.loadUser,
        ShareControllers.getAllSharesByUser,
    )

}