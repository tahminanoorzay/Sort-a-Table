function sortFun() {
  let changeName = document.querySelectorAll(".changeName");
  let centersArray = [];
  let rowsArray = [];

  for (let i = 0; i < changeName.length; i++) {
    let countryName = changeName[i].querySelector(".countryName").textContent;
    centersArray.push(countryName);
    rowsArray.push(changeName[i]);
  }

  for (let i = 0; i <= centersArray.length; i++) {
    for (let j = i + 1; j < centersArray.length; j++) {
      if (centersArray[i] > centersArray[j]) {
        let temp = centersArray[i];
        centersArray[i] = centersArray[j];
        centersArray[j] = temp;

        let tempRow = rowsArray[i];
        rowsArray[i] = rowsArray[j];
        rowsArray[j] = tempRow;
      }
    }
  }

  let tableBody = document.querySelector("table");
  for (let i = 0; i < rowsArray.length; i++) {
    tableBody.appendChild(rowsArray[i]);
  }
}
