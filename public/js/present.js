const hadirButton = document.getElementById("hadir");
const id = document.getElementById("studentId");

hadirButton.addEventListener("click", () => {
  document.location.href = `/scan-present/${id.value}/present`;
});
