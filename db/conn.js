const chalk = require("chalk");
const mongoose = require("mongoose");

//Creating A DataBase
const DB = process.env.DATABASE;

mongoose
  .connect(DB, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => {
    console.log(chalk.yellow("Connected to MongoDB Atlas Cloud Database.."));
  })
  .catch((error) => {
    console.log(error);
  });
