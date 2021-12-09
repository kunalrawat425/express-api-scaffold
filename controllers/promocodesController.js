const db = require("../models");
const { Promocode } = db;
const Op = db.Sequelize.Op;
const BaseController = require("./BaseController");
class promocodesController extends BaseController {
  findAll(req, res) {
    super
      .getAll(Promocode, req)
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Promocodes.",
        });
      });
  }
  create(req, res, next){
    Promocode.create(req.body)
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || "Some error occurred while creating the promocode.",
        });
      });
  };
  findById(req, res) {
    const id = req.params.id;
    super
      .findById(Promocode, req.params, req.query)
      .then((data) => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find promocodes with id=${id}.`,
          });
        }
      })
      .catch((err) => {
        res.status(500).send({
          message: "Error retrieving promocodes with id=" + id,
        });
      });
  }
  update(req, res) {
    const id = req.params.id;
    super
      .update(Campaign, req.body, req.params, req.query)
      .then((num) => {
        if (num == 1) {
          res.send({
            message: "promocodes was updated successfully.",
          });
        } else {
          res.send({
            message: `Cannot update promocodes with id=${id}. Maybe promocodes was not found or req.body is empty!`,
          });
        }
      })
      .catch((err) => {
        res.status(500).send({
          message: "Error updating promocodes with id=" + id,
        });
      });
  }
  delete(req, res) {
    const id = req.params.id;
  
    super
      .delete(Campaign, req.params, req.query)
      .then((num) => {
        if (num == 1) {
          res.send({
            message: "promocode was deleted successfully!",
          });
        } else {
          res.send({
            message: `Cannot delete promocode with id=${id}.`,
          });
        }
      })
      .catch((err) => {
        res.status(500).send({
          message: "Could not find promocode with id=" + id,
        });
      });
  }
}

module.exports = promocodesController;
