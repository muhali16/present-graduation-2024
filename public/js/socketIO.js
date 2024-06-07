const namaField = document.getElementById("studentName");
const departementField = document.getElementById("studentDepartement");
const welcomeField = document.getElementById("welcomeText");

const socket = io();

socket.on("welcome-text", (item) => {
  namaField.classList.add("animation-name");
  namaField.innerText = item.nama;
  console.log(presentField.dataset.studentId);
  setTimeout(() => {
    namaField.classList.remove("animation-name");
    departementField.classList.remove("animation-name");
  }, 2000);
});
