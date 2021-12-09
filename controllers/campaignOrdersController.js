const db = require("../models");
const  BaseController  = require("./BaseController");
const { CampaignOrder } = db;
const Op = db.Sequelize.Op;
class campaignOrdersController extends BaseController {
  findAll(req, res) {
    super
      .getAll(CampaignOrder, req)
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message ||
            "Some error occurred while retrieving Campaignorders.",
        });
      });
  }

  create(req, res, next) {
    CampaignOrder.create(req.body)
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message ||
            "Some error occurred while creating the campaignorder.",
        });
      });
  }

  findById(req, res) {
    const id = req.params.id;
    super
      .findById(CampaignOrder, req.params, req.query)
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
      .update(CampaignOrder, req.body, req.params, req.query)
      .then((num) => {
        if (num == 1) {
          res.send({
            message: "campaignorder was updated successfully.",
          });
        } else {
          res.send({
            message: `Cannot update campaignorder with id=${id}. Maybe campaignorder was not found.`,
          });
        }
      })
      .catch((err) => {
        res.status(500).send({
          message: "Error updating campaignorder with id=" + id,
        });
      });
  }
  delete(req, res) {
    const id = req.params.id;

    super
      .delete(CampaignOrder, req.params, req.query)
      .then((num) => {
        if (num == 1) {
          res.send({
            message: "campaignorder was deleted successfully!",
          });
        } else {
          res.send({
            message: `Cannot delete campaignorder with id=${id}.`,
          });
        }
      })
      .catch((err) => {
        res.status(500).send({
          message: "Could not find campaignorder with id=" + id,
        });
      });
  }
}
module.exports = campaignOrdersController;
