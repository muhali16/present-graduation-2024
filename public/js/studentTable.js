const socket = io();

socket.on("student-table", (item) => {
  const presentField = document.getElementById("hadir-" + item.nis);
  presentField.innerText = "✅";
  location.reload();
  console.log(true);
});

$(document).ready(function () {
  const table = $("#studentTable").DataTable();

  $("#exportButton").on("click", function () {
    exportTableToExcel(table, "Data Kehadiran Lepas Kenang 2024");
  });
});

function exportTableToExcel(table, filename = "") {
  const data = [];
  const headers = [];

  // Get headers
  table
    .columns()
    .header()
    .each(function (header) {
      headers.push($(header).text());
    });

  // Get data
  table.rows().every(function () {
    const row = [];
    $(this.node())
      .find("td")
      .each(function () {
        // If the cell contains a link, get the text inside the link
        const cellContent = $(this).find("a").length
          ? $(this).find("a").text()
          : $(this).text();
        row.push(cellContent);
      });
    data.push(row);
  });

  // Create a workbook and add the data
  const wb = XLSX.utils.book_new();
  const ws_data = [headers].concat(data); // Combine headers and data
  const ws = XLSX.utils.aoa_to_sheet(ws_data); // Convert array of arrays to sheet

  XLSX.utils.book_append_sheet(wb, ws, "Sheet1");

  const wbout = XLSX.write(wb, { bookType: "xlsx", type: "binary" });

  const s2ab = function (s) {
    const buf = new ArrayBuffer(s.length);
    const view = new Uint8Array(buf);
    for (let i = 0; i < s.length; i++) view[i] = s.charCodeAt(i) & 0xff;
    return buf;
  };

  const blob = new Blob([s2ab(wbout)], { type: "application/octet-stream" });
  const link = document.createElement("a");
  link.href = window.URL.createObjectURL(blob);
  link.download = filename ? filename + ".xlsx" : "excel_data.xlsx";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
