/* eslint-disable prefer-arrow-callback */
// create some helper functions to work on the database
let express = require("express");
const db = require("../models");
const { User } = db;
var bcrypt = require("bcryptjs");
const router = express();
const jwt = require("jsonwebtoken");
const Validator = require("../middlewares/schemaValidator");
const createUser = async ({ email, password, first_name, last_name }) => {
  return await User.create({ email, password, first_name, last_name });
};
const passportJWT = require("passport-jwt");
const { USE } = require("sequelize/dist/lib/index-hints");
let ExtractJwt = passportJWT.ExtractJwt;

let jwtOptions = {};
jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
jwtOptions.secretOrKey = "wowwow";

const getUser = async (obj) =>
  await User.findOne({
    where: obj,
  });

// register route
router.post(
  "/register",
  Validator("registerSchema"),
  async function (req, res, next) {
    let { email, password, first_name, last_name } = req.body;

    const user = await getUser({ email });
    if (user) {
      return res.status(401).json({ message: "Email already exists" });
    }

    // generate salt to hash password
    const salt = await bcrypt.genSalt(10);
    // now we set user password to hashed password
    password = await bcrypt.hash(password, salt);
    createUser({ email, password, first_name, last_name })
      .then((user) => {
        let payload = { id: user.id };
        let token = jwt.sign(payload, jwtOptions.secretOrKey);
        return res.status(200).json({
          data: { user, token },
          message: "account created successfully",
        });
      })
      .catch((err) => res.status(401).json({ message: err }));
  }
);

//login route
router.post(
  "/login",
  Validator("loginSchema"),
  async function (req, res, next) {
    const { email, password } = req.body;
    const user = await getUser({ email });
    if (!user) {
      return res.status(401).json({ message: "No such user found" });
    }
    const validPassword = await bcrypt.compare(password, user.password);
    if (validPassword) {
      // from now on we'll identify the user by the id and the id is the
      // only personalized value that goes into our token
      let payload = { id: user.id };
      let token = jwt.sign(payload, jwtOptions.secretOrKey);
      return res.json({
        message: "User loggedin successfully",
        data: { user, token },
      });
    } else {
      return res.status(401).json({ message: "Password is incorrect" });
    }
  }
);
function generateUserToken(user) {
  let payload = { id: user.id };
  let token = jwt.sign(payload, jwtOptions.secretOrKey);
}
// router.get(
//   "/api/authentication/google/start",
//   passport.authenticate("google", {
//     session: false,
//     scope: ["openid", "profile", "email"],
//   })
// );
// router.get(
//   "/api/authentication/google/redirect",
//   passport.authenticate("google", { session: false }),
//   generateUserToken
// );

module.exports = router;
