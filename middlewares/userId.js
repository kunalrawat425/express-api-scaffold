
module.exports = function (req, res, next) {
  if (req.method == "GET") {
    if (!req.params) {
      if (!req.query.filter) {
        req.query.filter = {};
      }
      req.query.filter.userId = req.user.id;
    } else {
      req.query.userId = req.user.id;
    }
  }

  if (req.method == "POST") {
    req.body.userId = req.user.id;
  }

  if (req.method == "PATCH") {
    req.body.userId = req.user.id;
  }

  if (req.method == "DELETE") {
    req.query.userId = req.user.id;
  }

  next();
};
