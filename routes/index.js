const db = require("../models");
var express = require("express");
const { User } = db;
var router = express.Router();
const userId = require("../middlewares/userId");

const userRouter = require("../routes/userRoute");


const passport = require("passport");
const passportJWT = require("passport-jwt");
let ExtractJwt = passportJWT.ExtractJwt;
let JwtStrategy = passportJWT.Strategy;
let jwtOptions = {};
jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
jwtOptions.secretOrKey = "wowwow";
const getUser = async (obj) => {
  return await User.findOne({
    where: obj,
  });
};
// lets create our strategy for web token
let strategy = new JwtStrategy(jwtOptions, async function (jwt_payload, next) {
  await getUser({ id: jwt_payload.id }).then((data) => {
    if (data) {
      if (data.role_id == 1) {
        router.use(userId);
      }
      next(null, data);
    } else {
      next(null, false);
    }
  });
});
passport.use(strategy);
router.use(passport.authenticate("jwt", { session: false }));
router.use(userId);

router.use("/user", userRouter);

module.exports = router;
