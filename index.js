const express = require("express");
const app = express();
const path = require("path");
const hbs = require('hbs');
const chalk = require("chalk");
const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });

const PORT = process.env.PORT || 5000;
require('./db/conn');
const User = require('./models/UserSchema');

const staticPath = path.join(__dirname, "./public");
const templatePath = path.join(__dirname, "./templates/views");
const partialPath = path.join(__dirname, "./templates/partials");

app.use('/css', express.static(path.join(__dirname, "./node_modules/bootstrap/dist/css")));
app.use('/js', express.static(path.join(__dirname, "./node_modules/bootstrap/dist/js")));
app.use('/jq', express.static(path.join(__dirname, "./node_modules/jquery/dist")));

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static(staticPath));

app.use(require("./routes/router"));
app.set("view engine", "hbs");
app.set("views", templatePath);
hbs.registerPartials(partialPath);

app.listen(PORT, () => {
  console.log(chalk.redBright(`Server is running on Port no : ${PORT}`));
});
