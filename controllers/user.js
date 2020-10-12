const { UserModel } = require("../model");
const { ModelResolver } = require("./resolvers");
const expressJwt = require("express-jwt");
import jwt from 'jsonwebtoken';
module.exports = {
  register: (req, res) => {
    UserModel.UsersUserRegisterService(req.body)
      .then((emailData) => {
        //Sending Verification email
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
    const token=user.token;
    if (token && jwt.decode(token)) {
      const expiry = jwt.decode(token).exp;
      const now = new Date();
      if(now.getTime() > expiry * 1000)
      {
        res.json({
          success: false,
          message: "User tokken expired Please login again.",
        });     
      }
      else
      {
        next()
      }
      
    }
    else
    {
      res.json({
        success: false,
        message: "User is not logged in",
      });
      
    }


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

    UserModel.UserQrScanService(req,req.params).then((success) => {
      res.json(success);
    })
    .catch((error) => {
      res.json(error);
    });

  },
  getUserReusePoints:(req,res)=>{
    UserModel.UserGetUserReusePointsService(req,req,params).then((success) => {
      res.json(success);
    })
    .catch((error) => {
      res.json(error);
    });
  }
};
