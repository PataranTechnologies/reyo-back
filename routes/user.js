const { UserControllers } = require("../controllers");

const prefix = "/api/user/";

module.exports = (app) => {
  app.post(`${prefix}register`, UserControllers.register);
  app.post(`${prefix}vendor/register`, UserControllers.vendorRegister);
  app.get(`${prefix}email/verify`, UserControllers.emailVerification);
  app.put(`${prefix}profile/update`, UserControllers.updateUser);
  app.put(`${prefix}profile/update/vendor`, UserControllers.updateVendor);
  app.post(
    `${prefix}forgotpassword/gettoken`,
    UserControllers.getResetPasswordToken
  );
  app.post(
    `${prefix}forgotpassword/setpassword`,
    UserControllers.forgotPassword
  );
  app.post(`${prefix}login`, UserControllers.login);
  app.post(`${prefix}thirdPartySign`,UserControllers.userThirdPartySignIn)
  app.post(`${prefix}scanQR`,UserControllers.authenticateJWT,UserControllers.isSignedIn,UserControllers.loadUser, UserControllers.qrScan);
  app.get(`${prefix}getReusePoint`,UserControllers.authenticateJWT,UserControllers.isSignedIn,UserControllers.loadUser,UserControllers.getUserReusePoints);
  app.get(`${prefix}getReuseHistory`,UserControllers.authenticateJWT,UserControllers.isSignedIn,UserControllers.loadUser,UserControllers.getReuseHistory);
};
