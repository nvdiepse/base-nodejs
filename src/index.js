const express = require("express");
const path = require('path');

const app = express();
require("dotenv").config();
require("../src/config/db");

const apiRouter = require("../src/routers/api");
const webRouter = require("../src/routers/web");
const adminRouter = require("../src/routers/admin");

const port = process.env.PORT || 3000;

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//setup public folder
app.use(express.static('./public'));

app.use(express.json());
app.use('/api', apiRouter);
app.use('/admin', adminRouter);
app.use('/', webRouter);

app.listen(port, () => {
  console.log(`App running port: ${port}`);
});
