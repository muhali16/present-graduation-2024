const { Sequelize } = require("sequelize");

const db = new Sequelize("absensi_lepas_kenang", "root", "", {
  host: "localhost",
  dialect: "mysql",
  define: {
    timestamps: false,
  },
});

module.exports = db;
