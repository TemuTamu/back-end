const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CompanySchema = new Schema({
  name: {
    type: String,
  }
})

const CompanyModel = mongoose.model('company', CompanySchema);

module.exports = CompanyModel;
