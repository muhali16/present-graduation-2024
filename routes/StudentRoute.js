const express = require("express");
const { Sequelize, DataTypes } = require("sequelize");
const Student = require("../entities/Student");

const router = express.Router();

router.get("/students", async (req, res) => {
  try {
    const students = await Student.findAll({ order: [["nama", "ASC"]] });
    res.render("student", { title: "Students", students: students });
  } catch (error) {
    console.log(error.message);
  }
});

router.get("/students/:id", async (req, res) => {
  try {
    const students = await Student.findOne({
      where: { id: req.params.id, aktif: 1 },
    });
    res.render("show-student", { title: "Show Students", data: students });
  } catch (error) {
    console.log(error.message);
  }
});

module.exports = router;
