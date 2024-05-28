const namaField = document.getElementById("studentName");
const classField = document.getElementById("studentClass");
const unitField = document.getElementById("studentUnit");

const socket = io();

socket.on("hadir", (item) => {
  namaField.innerText = item.nama;
  classField.innerText = item.kelas;
  unitField.innerText = item.unit_sekolah;
  namaField.classList.add('animate-bounce')
});
