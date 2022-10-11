const container = document.getElementById("container");

function makeRows(rows, cols) {
  let rowSize = 1;
  let columnSize = 1;
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
      columnSize += 1;
    } else {
      columnSize++;
    }
  }
}

makeRows(30, 30);

const gridArray = document.querySelectorAll(".grid-item");

function checkIfArray(array) {
  // function to check if data is array
  array;
  let arrayBl = null;
  if (array instanceof Array) {
    arrayBl = true;
    console.log(arrayBl);
  } else {
    arrayBl = false;
    console.log(arrayBl);
  }
  return arrayBl;
}

checkIfArray(randomArray);
