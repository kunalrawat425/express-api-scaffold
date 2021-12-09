const express = require("express");
const app = express();
const cors = require("cors");
const secureRoute = require("./routes/index");
const auth = require("./routes/authRoute");
const swaggerUi = require("swagger-ui-express");
const swaggerFile = require("./swagger_output.json");

const passport = require("passport");
const { request } = require("./routes/authRoute");

var corsOptions = {
  origin: "http://localhost:8081",
};

app.use(cors(corsOptions));
// initialize passport with express

app.use(passport.initialize());

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.use(auth);

app.use(secureRoute);
// set some basic routes
app.get("/", function (req, res) {
  res.json({ message: "Express is up!" });
});
app.use((err, req, res, next) => {

  res.status(err.status || 500);
  res.json({
      error: {
          status: err.status || 500,
          message: err.message
      }
  })
});

// set port, listen for requests
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

app.use("/doc", swaggerUi.serve, swaggerUi.setup(swaggerFile));