const db = require("../models");
const { Service } = db;
const Op = db.Sequelize.Op;
const BaseController = require("./BaseController");
class servicesController extends BaseController {
  findAll(req, res) {
    super
      .getAll(Service, req)
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Services.",
        });
      });
  }
  create(req, res, next) {
    Service.create(req.body)
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || "Some error occurred while creating the Service.",
        });
      });
  }
  findById(req, res) {
    const id = req.params.id;
    super
    .findById(Service, req.params, req.query)
      .then((data) => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find Service with id=${id}.`,
          });
        }
      })
      .catch((err) => {
        res.status(500).send({
          message: "Error retrieving Service with id=" + id,
        });
      });
  }
  update(req, res) {
    const id = req.params.id;
    super
    .update(Service, req.body, req.params, req.query)
      .then((data) => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find Service with id=${id}.`,
          });
        }
      })
      .catch((err) => {
        res.status(500).send({
          message: "Error retrieving Service with id=" + id,
        });
      });
  }
  delete(req, res)  {
    const id = req.params.id;
    super
      .delete(Service, req.params, req.query)
      .then((num) => {
        if (num == 1) {
          res.send({
            message: "Service was deleted successfully!",
          });
        } else {
          res.send({
            message: `Cannot delete Service with id=${id}.`,
          });
        }
      })
      .catch((err) => {
        res.status(500).send({
          message: "Could not find Service with id=" + id,
        });
      });
  }
}
module.exports = servicesController;