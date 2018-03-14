require('dotenv').config()
const mongoose = require("mongoose");
mongoose.set('debug', true)

// Uncomment the following when running via mLAB
// var connectURL = "mongodb://" + process.env.DB_USER + ":" + process.env.DB_PASS + "@ds237748.mlab.com:37748/ben-hackernews-clone";
// Uncomment the following when running via localhost
var connectURL = "mongodb://localhost:27017/ebay";
mongoose.connect(connectURL);

// Combine all the models
module.exports.Product = require('./Product');