const {AboutUsControllers}=require('../controllers')
const { UserControllers } = require("../controllers");
const prefix = "/api/about/";
module.exports=(app)=>{

    app.get(
    `${prefix}data/`,
    AboutUsControllers.getData,


    );

    


}