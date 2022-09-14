const mongoose = require('mongoose');
require('dotenv').config();
const { DB_URI } = process.env;

mongoose.connect(DB_URI)
  .then(() => console.log('Connection successful'))
  .catch((err) => console.log('Connection unsuccessful', err));
