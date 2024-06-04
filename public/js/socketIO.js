const namaField = document.getElementById("studentName");
const welcomeField = document.getElementById("welcomeText");

const socket = io();

socket.on("hadir", (item) => {
  namaField.classList.add("animation-name");
  namaField.innerText = item.nama;
  setTimeout(() => {
    namaField.classList.remove("animation-name");
  }, 3000);
});
