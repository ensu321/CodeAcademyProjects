const container = document.getElementById("container");

function makeRows(rows, cols) {
  let rowSize = 1;
  let columnSize = 20;
  container.style.setProperty("--grid-rows", rows);
  container.style.setProperty("--grid-cols", cols);
  for (c = 0; c < rows * cols; c++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "grid-item";
    cell.setAttribute("x", rowSize);
    cell.setAttribute("y", columnSize);
    if (rowSize === 30) {
      rowSize = 1;
    } else {
      rowSize++;
    }

    if (columnSize === 1) {
      columnSize = 20;
    } else {
      columnSize--;
    }
  }
}

makeRows(20, 30);
