const scannerCanvas = document.getElementById("render");
const startScanButton = document.getElementById("scan");
const stopScanButton = document.getElementById("stopScan");
const sscanResult = document.getElementById("result");

const scan = new Html5Qrcode(/* element id */ "render");

startScanButton.addEventListener("click", (e) => {
  scannerCanvas.classList.remove("hidden");
  scan.start(
    { facingMode: { exact: "environment" } },
    {
      fps: 10, // Optional, frame per seconds for qr code scanning
      qrbox: { width: 250, height: 300 }, // Optional, if you want bounded box UI
    },
    (result) => {
      document.location.href = "/scan-present/" + result;
      scan.stop();
    }
  );
});

stopScanButton.addEventListener("click", () => {
  scan.stop();
  scannerCanvas.classList.add("hidden");
});
