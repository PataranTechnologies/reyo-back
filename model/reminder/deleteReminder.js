const ReminderModel = require("../../schemas/Reminder");
const sendError = (status, msg) => ({
  status,
  msg,
});

module.exports = ({ userId, reminderId }, { user }) =>
  new Promise(async (resolve, reject) => {
    try {
      if (!userId || !reminderId) {
        return reject(sendError(0, "Something Went Wrong"));
      }

      if (userId.toString() !== user._id.toString()) {
        return reject(
          sendError(0, "You are not allowed to perform this action")
        );
      }

      await ReminderModel.findByIdAndDelete(reminderId);

      resolve({ status: 1, msg: "Reminder Deleted Successfully" });
    } catch (error) {
      console.log(error);
      return reject(sendError(0, "Something Went Wrong"));
    }
  });
