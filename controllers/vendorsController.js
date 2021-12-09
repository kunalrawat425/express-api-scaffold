const db = require("../models");
const { Vendor } = db;
const Op = db.Sequelize.Op;
const BaseController = require("./BaseController");
class vendorsController extends BaseController {
   findAll(req, res) {
     console.log(req);
       super
      .getAll(Vendor, req).then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Vendors.",
        });
      });
  }
  create(req, res, next) {
    Vendor.create(req.body)
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Vendor.",
        });
      });
  }
  findById(req, res) {
    const id = req.params.id;
    super
    .findById(Vendor, req.params, req.query)
      .then((data) => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find Vendor with id=${id}.`,
          });
        }
      })
      .catch((err) => {
        res.status(500).send({
          message: "Error retrieving Vendor with id=" + id,
        });
      });
  }
  update(req, res) {
    const id = req.params.id;
    super
      .update(Vendor, req.body, req.params, req.query)
      .then((num) => {
        if (num == 1) {
          res.send({
            message: "Vendor was updated successfully.",
          });
        } else {
          res.send({
            message: `Cannot update Vendor with id=${id}. Maybe Vendor was not found or req.body is empty!`,
          });
        }
      })
      .catch((err) => {
        res.status(500).send({
          message: "Error updating Vendor with id=" + id,
          err,
        });
      });
  }
  delete(req, res) {
    const id = req.params.id;

    super
      .delete(Vendor, req.params, req.query)
      .then((num) => {
        if (num == 1) {
          res.send({
            message: "Vendor was deleted successfully!",
          });
        } else {
          res.send({
            message: `Cannot delete Vendor with id=${id}.`,
          });
        }
      })
      .catch((err) => {
        res.status(500).send({
          message: "Could not find Vendor with id=" + id,
        });
      });
  }
}

module.exports = vendorsController;