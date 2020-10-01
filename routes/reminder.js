const {ReminderControllers}=require('../controllers')
const { UserControllers } = require("../controllers");
const prefix = "/api/reminder/";
module.exports=(app)=>{

    app.post(
    `${prefix}create/:userId`,

    UserControllers.isSignedIn,
    UserControllers.loadUser,
    ReminderControllers.createReminder,


    );

    app.get(
    `${prefix}get/:userId`,
        UserControllers.isSignedIn,
        UserControllers.loadUser,
        ReminderControllers.getAllRemainder,
    );

    app.delete(
       `${prefix}delete/:userId`,
       UserControllers.isSignedIn,
       UserControllers.loadUser,
       ReminderControllers.deleteReminder
    )


}