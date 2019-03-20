// ./lib/db.js
const mongoose = require('mongoose')
mongoose.Promise = global.Promise;

mongoose.connect(
  'mongodb://root:password007@ds117806.mlab.com:17806/temu-tamu-dev', {
    useNewUrlParser: true
  }
);
