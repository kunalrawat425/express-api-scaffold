const db = require("../models");
const { Platform } = db;
const Op = db.Sequelize.Op;
const BaseController = require("./BaseController");
class platformsController extends BaseController {
  findAll(req, res) {
    super
      .getAll(Platform, req)
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Platforms.",
        });
      });
  }
  create(req, res, next) {
    Platform.create(req.body)
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the platform.",
        });
      });
  }
  findById(req, res) {
    const id = req.params.id;
    super
    .findById(Platform, req.params, req.query)
      .then((data) => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find platform with id=${id}.`,
          });
        }
      })
      .catch((err) => {
        res.status(500).send({
          message: "Error retrieving platform with id=" + id,
        });
      });
  }
  update(req, res) {
    const id = req.params.id;
    super
      .update(Platform, req.body, req.params, req.query)
      .then((num) => {
        if (num == 1) {
          res.send({
            message: "platform was updated successfully.",
          });
        } else {
          res.send({
            message: `Cannot update platform with id=${id}. Maybe platform was not found or req.body is empty!`,
          });
        }
      })
      .catch((err) => {
        res.status(500).send({
          message: "Error updating platform with id=" + id,
        });
      });
  }
  delete(req, res) {
    const id = req.params.id;

    super
    .delete(Platform, req.params, req.query)
      .then((num) => {
        if (num == 1) {
          res.send({
            message: "platform was deleted successfully!",
          });
        } else {
          res.send({
            message: `Cannot delete platform with id=${id}.`,
          });
        }
      })
      .catch((err) => {
        res.status(500).send({
          message: "Could not find platform with id=" + id,
        });
      });
  }
}
module.exports = platformsController;
