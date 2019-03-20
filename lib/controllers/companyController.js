const {
  companyModels
} = require('../models')

const companyController = {
  getAll: async (req, res, next) => {
    try {
      let companies = await companyModels.find()
      res.json({
        status: 200,
        data: companies
      })
    } catch (error) {
      res.json(error)
      throw (error)
    }
  }
}

module.exports = companyController
