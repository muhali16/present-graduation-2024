const { Sequelize } = require("sequelize");
const db = require("../config/db");

const { DataTypes } = Sequelize;

const Student = db.define(
  "siswa_lulus",
  {
    nama: DataTypes.STRING,
    kelas: DataTypes.STRING,
    ayah: DataTypes.STRING,
    ibu: DataTypes.STRING,
    wali: DataTypes.STRING,
    waayah: DataTypes.BIGINT,
    waibu: DataTypes.BIGINT,
    wawali: DataTypes.BIGINT,
    unit_sekolah: DataTypes.STRING,
    nis: {
      type: DataTypes.BIGINT,
      primaryKey: true,
    },
    departemen: DataTypes.STRING,
    hadir: DataTypes.INTEGER,
    aktif: DataTypes.INTEGER,
    timestamp_hadir: DataTypes.DATE,
  },
  {
    freezeTableName: true,
    timestamps: true,
    updatedAt: "timestamp_hadir",
    createdAt: false,
  }
);

module.exports = Student;
