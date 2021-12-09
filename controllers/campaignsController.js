const db = require("../models");
const { Campaign } = db;
const Op = db.Sequelize.Op;
const BaseController = require("./BaseController");

class campaignsController extends BaseController {
  findAll(req, res) {
    super
      .getAll(Campaign, req)
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Campaigns.",
        });
      });
  }
  create(req, res, next) {
    Campaign.create(req.body)
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Campaign.",
        });
      });
  }
  findById(req, res) {
    const id = req.params.id;
    super
      .findById(Campaign, req.params, req.query)
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
      .update(Campaign, req.body, req.params, req.query)
      .then((num) => {
        if (num == 1) {
          res.send({
            message: "Campaign was updated successfully.",
          });
        } else {
          res.send({
            message: `Cannot update Campaign with id=${id}. Maybe Campaign was not found or req.body is empty!`,
          });
        }
      })
      .catch((err) => {
        res.status(500).send({
          message: "Error updating Campaign with id=" + id,
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
            message: "Campaign was deleted successfully!",
          });
        } else {
          res.send({
            message: `Cannot delete Campaign with id=${id}.`,
          });
        }
      })
      .catch((err) => {
        res.status(500).send({
          message: "Could not find Campaign with id=" + id,
        });
      });
  }
}
module.exports = campaignsController;
