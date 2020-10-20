const {
  NODE_ENV = "development",
  // JWT
  JWT_SECRET,
  JWT_EXPIRE,
  HOST,
  EMAIL_USER,
  EMAIL_PASS,
  EMAIL_SERVICE,
  // atlas configurations
  ATLAS_CLUSTER,
  ATLAS_PASSWORD,
  ATLAS_USER,
} = process.env;

const db = process.env.MONGO_DB || "Reyo_App_db";

exports.mongoConnectionString = "mongodb+srv://rahul_bot1:Ta7t41uTgtRfwdyH@cluster0.dzbde.mongodb.net/ReyoDb2?retryWrites=true&w=majority";

exports.NODE_ENV = NODE_ENV;

// JWT
exports.JWT_EXPIRE = JWT_EXPIRE;
exports.JWT_SECRET = JWT_SECRET;

exports.HOST = HOST;

// Email creadentials
exports.EMAIL_PASS = EMAIL_PASS;
exports.EMAIL_USER = EMAIL_USER;
exports.EMAIL_SERVICE = EMAIL_SERVICE;
