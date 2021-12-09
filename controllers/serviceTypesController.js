const db = require("../models");
const { ServiceType } = db;
const Op = db.Sequelize.Op;
const BaseController = require("./BaseController");
class serviceTypesController extends BaseController {
  findAll(req, res) {

    super
    .getAll(ServiceType, req)
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || "Some error occurred while retrieving ServiceTypes.",
        });
      });
  }
  create(req, res, next)  {
    ServiceType.create(req.body)
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || "Some error occurred while creating the ServiceType.",
        });
      });
  }
  findById(req, res){
    const id = req.params.id;
    super
      .findById(ServiceType, req.params, req.query)
      .then((data) => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find ServiceType with id=${id}.`,
          });
        }
      })
      .catch((err) => {
        res.status(500).send({
          message: "Error retrieving ServiceType with id=" + id,
        });
      });
  }
  update(req, res)  {
    const id = req.params.id;
    super
      .update(ServiceType, req.body, req.params, req.query)
      .then((num) => {
        if (num == 1) {
          res.send({
            message: "ServiceType was updated successfully.",
          });
        } else {
          res.send({
            message: `Cannot update ServiceType with id=${id}. Maybe ServiceType was not found or req.body is empty!`,
          });
        }
      })
      .catch((err) => {
        res.status(500).send({
          message: "Error updating ServiceType with id=" + id,
        });
      });
  }
  delete(req, res){
    const id = req.params.id;
    super
    .delete(ServiceType, req.params, req.query)
      .then((num) => {
        if (num == 1) {
          res.send({
            message: "ServiceType was deleted successfully!",
          });
        } else {
          res.send({
            message: `Cannot delete User with id=${id}. Maybe ServiceType was not found!`,
          });
        }
      })
      .catch((err) => {
        res.status(500).send({
          message: "Could not find ServiceType Tutorial with id=" + id,
        });
      });
  }
}
module.exports = serviceTypesController;
