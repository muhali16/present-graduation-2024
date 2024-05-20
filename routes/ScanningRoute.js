const express = require("express");
const Student = require("../entities/Student");

const router = express.Router();

router.get("/student-present", (req, res) => {
  res.render("index", { title: "Welcome" });
});

router.get("/scan-present", (req, res) => {
  res.render("scanner", { title: "Scan Present" });
});

router.get("/scan-present/:nis", async (req, res) => {
  try {
    const student = await Student.findOne({
      where: { nis: req.params.nis, aktif: 1 },
    });
    // console.log(student);
    res.render("present", { title: "Present Data", data: student });
  } catch (error) {
    console.log("Error Get Student: " + error.message);
  }
});

router.get("/scan-present/:nis/present", async (req, res) => {
  try {
    const updating = await Student.update(
      { hadir: 1 },
      { where: { nis: req.params.nis, aktif: 1 } }
    );
    // io.emit("hadir", updating.nama);
    res.redirect(`/scan-present/${req.params.nis}/success`);
  } catch (error) {
    console.log("Error Update: " + error.message);
  }
});

module.exports = router;
