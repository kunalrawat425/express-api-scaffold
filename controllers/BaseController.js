const { models } = require("mongoose");

class BaseController {
  async getAll(model, req) {
    //get paginated results
    const limit = parseInt(req.query.limit || 10);
    let page = req.query.page || 0;
    let offset = parseInt((page - 1) * limit <= 0 ? 0 : (page - 1) * limit);

    //get filtered results
    let filters = req.query.filter;
    // console.log(filters);

    //allow only filterable columns
    for (let key in filters) {
      if (!model.filterableColumns.includes(key)) {
        delete filters[key];
      }
    }
    return await model.findAndCountAll({
      where: filters,
      limit,
      offset,
      order: [["id", "DESC"]],
      attributes: model.getColumns,
    });
  }

  async findById(model, params, query) {
    //allow only filterable columns
    for (let key in query) {
      if (!model.filterableColumns.includes(key)) {
        delete query[key];
      }
    }
    return await model.findOne( {where: { ...params, ...query }});
  }

  async update(model, body, params, query) {
    //allow only filterable columns
    for (let key in query) {
      if (!model.filterableColumns.includes(key)) {
        delete query[key];
      }
    }
    return await model.update(body, {
      where: { ...params, ...query },
    });
  }

  async delete(model, params, query) {
    console.log();
    //allow only filterable columns
    for (let key in query) {
      if (!model.filterableColumns.includes(key)) {
        delete query[key];
      }
    }
    console.log({ ...params, ...query });

    return await model.destroy({
      where: { ...params, ...query },
    });
  }
}

module.exports = BaseController;
