const express = require("express");
const Student = require("../entities/Student");

const router = express.Router();

router.get("/students", async (req, res) => {
  try {
    const students = await Student.findAll({
      order: [["timestamp_hadir", "desc"]],
    });
    res.render("student", { title: "Students", students: students });
  } catch (error) {
    console.log(error.message);
  }
});

router.get("/students/:nis", async (req, res) => {
  try {
    const students = await Student.findOne({
      where: { nis: req.params.nis, aktif: 1 },
    });
    res.render("show-student", { title: "Show Students", data: students });
  } catch (error) {
    console.log(error.message);
  }
});

module.exports = router;
