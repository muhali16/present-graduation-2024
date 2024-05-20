const { Sequelize } = require("sequelize");
const db = require("../config/db");

const { DataTypes } = Sequelize;

const Student = db.define(
  "siswa_lulus",
  {
    nama: DataTypes.STRING,
    kelas: DataTypes.STRING,
    unit_sekolah: DataTypes.STRING,
    nis: {
      type: DataTypes.BIGINT,
      primaryKey: true,
    },
    departemen: DataTypes.STRING,
    hadir: DataTypes.INTEGER,
    aktif: DataTypes.INTEGER,
  },
  { freezeTableName: true }
);

module.exports = Student;
