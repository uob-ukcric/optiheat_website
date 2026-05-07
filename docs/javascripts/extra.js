document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll("table").forEach(function (table) {
    table.classList.add("table", "table-striped", "table-bordered", "table-hover");
  });
});
