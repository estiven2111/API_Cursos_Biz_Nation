const express = require('express');
const {mainRouter} = require("./rutes/index")
const cors = require('cors');
const morgan = require('morgan');

const app = express();
app.use(express.urlencoded({ extended: true }))
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
 app.use(mainRouter)

module.exports = app