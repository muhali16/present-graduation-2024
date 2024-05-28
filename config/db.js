const { Sequelize } = require("sequelize");
const APP = require("./app");

const db = new Sequelize(APP.dbname, "root", "", {
  host: "localhost",
  dialect: "mysql",
  define: {
    timestamps: false,
  },
});

module.exports = db;
