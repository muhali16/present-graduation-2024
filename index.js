const express = require("express");
const https = require("https");
const { Server } = require("socket.io");
const fs = require("fs");
const StudentRoute = require("./routes/StudentRoute");
const Student = require("./entities/Student");
const ScanningRoute = require("./routes/ScanningRoute");
const APP = require("./config/app");

const httpsOptions = {
  key: fs.readFileSync("./security/cert.key"),
  cert: fs.readFileSync("./security/cert.pem"),
};
const app = express();
const server = https.createServer(httpsOptions, app);
const io = new Server(server, {
  connectionStateRecovery: {},
});

// set the view engine to ejs
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(StudentRoute);
app.use(ScanningRoute);

app.get("/", async (req, res) => {
  res.render("index", { title: "Home" });
});

app.get("/scan-present/:nis/success", async (req, res) => {
  const student = await Student.findOne({
    where: { nis: req.params.nis, aktif: 1 },
  });
  io.emit("hadir", student);
  console.log("Hadir: " + student.nama);
  res.render("show", { title: "Success", data: student });
});

io.on("connection", (socket) => {
  console.log("User on connection");
  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
  socket.on("hadir", (msg) => {
    io.emit("hadir", msg);
    console.log("Nama: " + msg);
  });
});

server.listen(1543, APP.HOST, () => {
  console.log("server run at https://" + APP.HOST + ":1543");
});

module.exports = server;
