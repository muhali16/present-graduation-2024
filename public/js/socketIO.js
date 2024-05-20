const namaField = document.getElementById("studentName");

const socket = io();

socket.on("hadir", (item) => {
  namaField.innerText = item;
});
