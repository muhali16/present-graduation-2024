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
      document.location.href = result;
      scan.stop();
    }
  );
  // Html5Qrcode.getCameras()
  //   .then((devices) => {
  //     /**
  //      * devices would be an array of objects of type:
  //      * { id: "id", label: "label" }
  //      */
  //     if (devices && devices.length) {
  //       var cameraId = devices[1].id;
  //       scan
  //         .start(
  //           cameraId,
  //           {
  //             fps: 10, // Optional, frame per seconds for qr code scanning
  //             qrbox: { width: 250, height: 300 }, // Optional, if you want bounded box UI
  //           },
  //           (decodedText, decodedResult) => {
  //             // do something when code is read
  //             document.location.href = decodedText;
  //             scan.stop();
  //           },
  //           (errorMessage) => {
  //             // parse error, ignore it.
  //           }
  //         )
  //         .catch((err) => {
  //           // Start failed, handle it.
  //         });
  //     }
  //   })
  //   .catch((err) => {
  //     // handle err
  //   });
});

stopScanButton.addEventListener("click", () => {
  scan.stop();
  scannerCanvas.classList.add("hidden");
});
