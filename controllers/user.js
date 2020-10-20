const { UserModel } = require("../model");
const { ModelResolver } = require("./resolvers");
const expressJwt = require("express-jwt");
const jwt=require('jsonwebtoken')
const User =require('../schemas/User');
const nodemailer=require('nodemailer')
const { JWT_SECRET, JWT_EXPIRE } = require("../constants");
module.exports = {

 authenticateJWT : (req, res, next) => {
    const authHeader = req.headers.authorization;
 
    if (authHeader) {
        const token = authHeader.split(' ')[1];

        jwt.verify(token, JWT_SECRET, (err, user) => {
            if (err) {
                return res.sendStatus(403);
            }

            req.user = user;
            next();
        });
    } else {
        res.sendStatus(401);
    }
},

  register: (req, res) => {
    UserModel.UsersUserRegisterService(req.body)
      .then((emailData) => {
       
  
        UserModel.UsersSendEmailService(emailData)
          .then((success) => res.status(200).json(success))
          .catch((err) => res.json(err));
      })
      .catch((err) => res.json(err));
  },

  isSignedIn:(req,res,next)=>{

    if (!req.user) {
      res.json({
        success: false,
        message: "User is not logged in",
      });
    }

    next();
   

  },

  // Load User Data in the req object
  loadUser: (req, res, next) => {
   

    if(req.body.role && req.body.role==='Vendor')
    {
      UserModel.UsersLoadVendorService(req.user)
      .then((data) => {
        req.user = data;
        next();
      })
      .catch((err) => res.json(err));
    }else
    {

    UserModel.UsersLoadUserService(req.user)
      .then((data) => {
        req.user = data;
        next();
      })
      .catch((err) => res.json(err));
    }
  },

  loadVendor: (req, res, next) => {
   
    UserModel.UsersLoadVendorService(req.user)
      .then((data) => {
        req.user = data;
        next();
      })
      .catch((err) => res.json(err));
  },

  login: (req, res) => {
    UserModel.UsersLoginService(req.body)
      .then((success) => res.json(success))
      .catch((error) => res.json(error));
  },

  vendorRegister: (req, res) => {
    UserModel.UsersVendorRegisterService(req.body)
      .then((emailData) => {
        //Sending Verification email
        UserModel.UsersSendEmailService(emailData)
          .then((success) => res.status(200).json(success))
          .catch((err) => res.json(err));
      })
      .catch((err) => res.json(err));
  },

  emailVerification: (req, res) => {
    const {
      query: { id, token, role },
    } = req;
    UserModel.UsersEmailVerificationService({ id, token, role })
      .then((sucess) => {
        res.json(sucess);
      })
      .catch((err) => {
        res.json(err);
      });
  },

  updateUser: (req, res) => {
    UserModel.UsersUpdateUserProfileService(req.body)
      .then((sucess) => {
        res.json(sucess);
      })
      .catch((err) => {
        res.json(err);
      });
  },

  updateVendor: (req, res) => {
    UserModel.UsersUpdateVendorProfileService(req.body)
      .then((sucess) => {
        res.json(sucess);
      })
      .catch((err) => {
        res.json(err);
      });
  },

  getResetPasswordToken: (req, res) => {
    UserModel.UsersResetPasswordTokenService(req.body)
      .then((success) => {
        res.json(success);
      })
      .catch((error) => {
        res.json(error);
      });
  },

  forgotPassword: (req, res) => {
    UserModel.UsersForgotPasswordService(req.body)
      .then((success) => {
        res.json(success);
      })
      .catch((error) => {
        res.json(error);
      });
  },
  qrScan:(req,res)=>{

    UserModel.UsersQrScanService(req,req.params).then((success) => {
      res.json(success);
    })
    .catch((error) => {
      res.json(error);
    });

  },
  getUserReusePoints:(req,res)=>{
    UserModel.UsersGetUserReusePointsService(req,req,params).then((success) => {
      res.json(success);
    })
    .catch((error) => {
      res.json(error);
    });
  },
  getReuseHistory:(req,res)=>{
    UserModel.usersGetReuseHistoryService(req,req.params).then((success) => {
      res.json(success);
    })
    .catch((error) => {
      res.json(error);
    });
  },
  userThirdPartySignIn:(req, res) => {
    UserModel.UsersUserThirdPartySignInService(req.body)
      .then((success) => res.json(success))
      .catch((error) => res.json(error));
  },
};
