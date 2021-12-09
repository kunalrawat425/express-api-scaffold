const db = require("../models");
const { Payment } = db;
const Op = db.Sequelize.Op;
const BaseController = require("./BaseController");
class paymentsController extends BaseController {
  findAll(req, res) {
    super
      .getAll(Campaign, req)
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Payments.",
        });
      });
  }
  create(req, res, next)  {
    Payment.create(req.body)
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || "Some error occurred while creating the payment.",
        });
      });
  };
  findById(req, res) {
    const id = req.params.id;
    super
      .findById(Payment, req.params, req.query)
      .then((data) => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find Campaign with id=${id}.`,
          });
        }
      })
      .catch((err) => {
        res.status(500).send({
          message: "Error retrieving Campaign with id=" + id,
        });
      });
  }
  update(req, res) {
    const id = req.params.id;
    super
      .update(Payment, req.body, req.params, req.query)
      .then((num) => {
        if (num == 1) {
          res.send({
            message: "Payment was updated successfully.",
          });
        } else {
          res.send({
            message: `Cannot update Payment with id=${id}. Maybe Payment was not found or req.body is empty!`,
          });
        }
      })
      .catch((err) => {
        res.status(500).send({
          message: "Error updating Payment with id=" + id,
        });
      });
  }
  delete(req, res) {
    const id = req.params.id;
  
    super
    .delete(Payment, req.params, req.query)
      .then((num) => {
        if (num == 1) {
          res.send({
            message: "payment was deleted successfully!",
          });
        } else {
          res.send({
            message: `Cannot delete payment with id=${id}.`,
          });
        }
      })
      .catch((err) => {
        res.status(500).send({
          message: "Could not find payment with id=" + id,
        });
      });
  }
}
module.exports = paymentsController;






