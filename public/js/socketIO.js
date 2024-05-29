const namaField = document.getElementById("studentName");
const welcomeField = document.getElementById("welcomeText");

const socket = io();

socket.on("hadir", (item) => {
  if (namaField.classList.contains("animation-name")) {
    namaField.classList.remove("animation-name");
    welcomeField.classList.replace("hidden", "flex");
  }
  namaField.innerText = item.nama;
  namaField.classList.add("animation-name");
  setTimeout(() => {
    // namaField.classList.remove("animation-name");
    welcomeField.classList.replace("flex", "hidden");
  }, 6000);
});
