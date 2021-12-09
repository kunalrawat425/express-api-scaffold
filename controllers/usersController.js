const db = require("../models");
const { User } = db;
const Op = db.Sequelize.Op;
const BaseController = require("./BaseController");
class usersController extends BaseController {
  findAll(req, res) {

    super
      .getAll(User, req)
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || "Some error occurred while retrieving Users.",
        });
      });
  }
  create(req, res, next) {
    User.create(req.body)
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || "Some error occurred while creating the User.",
        });
      });
  };
  findById(req, res){
    const id = req.params.id;
    super
      .findById(User, req.params, req.query)
      .then((data) => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find User with id=${id}.`,
          });
        }
      })
      .catch((err) => {
        res.status(500).send({
          message: "Error retrieving User with id=" + id,
        });
      });
  }
  update(req, res) {
    const id = req.params.id;
    super
      .update(User, req.body, req.params, req.query)
      .then((num) => {
        if (num == 1) {
          res.send({
            message: "User was updated successfully.",
          });
        } else {
          res.send({
            message: `Cannot update User with id=${id}. Maybe User was not found or req.body is empty!`,
          });
        }
      })
      .catch((err) => {
        res.status(500).send({
          message: "Error updating User with id=" + id,
        });
      });
  }
  delete(req, res)  {
    const id = req.params.id;
  
    super
    .delete(User, req.params, req.query)
      .then((num) => {
        if (num == 1) {
          res.send({
            message: "User was deleted successfully!",
          });
        } else {
          res.send({
            message: `Cannot delete User with id=${id}. Maybe Tutorial was not found!`,
          });
        }
      })
      .catch((err) => {
        res.status(500).send({
          message: "Could not find User Tutorial with id=" + id,
        });
      });
  }
}
module.exports = usersController;
