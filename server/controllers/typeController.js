const { Type } = require('../models/models');
const ApiError = require('../error/ApiError');

class TypeController {
  async create(req, res, next) {
    const { name } = req.body;
    try {
      const type = await Type.create({ name });
      return res.json(type);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }

  async getAll(req, res) {
    const types = await Type.findAll();
    return res.json(types);
  }
}

module.exports = new TypeController();
