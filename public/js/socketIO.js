const namaField = document.getElementById("studentName");
const classField = document.getElementById("studentClass");
const unitField = document.getElementById("studentUnit");

const socket = io();

socket.on("hadir.nama", (item) => {
  namaField.innerText = item;
  namaField.classList.add('animate-bounce')
});
socket.on("hadir.kelas", (item) => {
  classField.innerText = item;
});
socket.on("hadir.unit", (item) => {
  unitField.innerText = item;
});
