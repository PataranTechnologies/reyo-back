const InviteModel = require("../../schemas/Invite");
const sendError = (status, msg) => ({
  status,
  msg,
});

module.exports = ({ user, body }, {userId}) =>
  new Promise(async (resolve, reject) => {
    try {
      let {

        description,
        name,
        email,
        role,

      } = body;

      if (
        (
        !description,
        !name,
        !email,
        !role
        )
      ) {
        return reject(sendError(0, "Please fill all the required details"));
      }

      if (userId.toString() !== user._id.toString()) {
        return reject(
          sendError(0, "You are not allowed to perform this action")
        );
      }

      let data = {
        description,
        name,
        email,
        role
      };

      const invite = await InviteModel.create(data);

      if (!invite) {
        reject(sendError(0, "Can't Send Invitation,Something went wrong"));
      }

      resolve({ status: 1, msg: "Data Shared" });
    } catch (error) {
      console.log(error);
      return reject(sendError(0, "Something Went Wrong"));
    }
  });
