const sButton = document.getElementById("sButton");
tdiv= document.getElementById("outputTable");
let peopleCount;

const peopleDataV = [];

const emailExp = /\S+@\S+\.\S+/;
const titleExp = /^\b[mM](r|iss|s|rs)\b/i;
const nameExpT = /\s\b[a-zA-Z]+\s[a-zA-Z]+\b\s?/gi; // name if there's a title
const nameExp = /^[a-zA-Z]+\s[a-zA-Z]+(?=\s|$)/i;  // name if there's no title

const numExp =
  /\b\s?[\+[0-9]{0,3}]?[-\s\.]?[(]?[0-9]{3,4}[)]?[-\s\.]?[0-9]{3,4}[-\s\.]?[0-9]{3,6}\b/i;



sButton.addEventListener("click", (event) => {
  event.preventDefault();
  const providedData = [];
  if (document.getElementById("content").value.trim() == "") { //if user tries to enter an empty input an alert will show 
    alert("Please enter correct data");
  } else {
    const content = document.getElementById("content").value.trim();
    peopleCount = content.split(/\r\n|\r|\n/).length;
    peopleData = content.split("\n");
    const peopleDataV = [];
    let isInvalid = false;

    for (let i = 0; i < peopleCount; i++) { //this loop is valdiate the data (has name and surname), and control duplicates 
      if (
        peopleData[i].match(titleExp) != null &&
        peopleData[i].match(nameExpT) == null
      ) {
        isInvalid = true;
      } else if (
        peopleData[i].match(titleExp) == null &&
        peopleData[i].match(nameExp) == null
      ) {
        isInvalid = true;
      } else {
        if (peopleData[i].match(titleExp)) {
          if (!providedData.includes(peopleData[i].match(nameExpT)[0])) {
            providedData.push(peopleData[i].match(nameExpT)[0]);
            peopleDataV.push(peopleData[i]);
          }
        } else {
          if (!providedData.includes(peopleData[i].match(nameExp)[0])) {
            providedData.push(peopleData[i].match(nameExp)[0]);
            peopleDataV.push(peopleData[i]);
          }
        }
      }
    }

    if (isInvalid) {
      alert("Some of the data you enterd is invalid and will be ignored"); //if user tries to enter an invalid person data an alert will show
    }
    peopleData = peopleDataV; 
    peopleCount = peopleDataV.length;

   

    const table = document.createElement("table");
    for (let i = 0; i < peopleCount; i++) {
      const row = document.createElement("tr");
      for (let j = 0; j < 5; j++) {
        const cell = document.createElement("td");
        if (j == 0) {
          if (peopleData[i].match(titleExp) != null) {
            cell.innerHTML = peopleData[i].match(titleExp)[0];
          } else {
            cell.innerHTML = " ";
          }
          row.appendChild(cell);
        }
        if (j == 1) {
          if (
            peopleData[i].match(nameExpT) != null ||
            peopleData[i].match(nameExp) != null
          ) {
            
            if (peopleData[i].match(titleExp) == null) {
              cell.innerHTML = peopleData[i]
                .match(nameExp)[0]
                .trim()
                .split(" ")[0]; 
            } else {
              cell.innerHTML = peopleData[i]
                .match(nameExpT)[0]
                .trim()
                .split(" ")[0];
            }
          }
          row.appendChild(cell);
        }
        if (j == 2) {
          if (
            peopleData[i].match(nameExpT) != null ||
            peopleData[i].match(nameExp) != null
          ) {
            if (peopleData[i].match(titleExp) == null) {
              cell.innerHTML = peopleData[i]
                .match(nameExp)[0]
                .trim()
                .split(" ")[1]; 
            } else {
              cell.innerHTML = peopleData[i]
                .match(nameExpT)[0]
                .trim()
                .split(" ")[1];
            }
          }
          row.appendChild(cell);
        }

        if (j == 3) {
          if (peopleData[i].match(numExp) != null) {
            cell.innerHTML = peopleData[i].match(numExp)[0];
          } else {
            cell.innerHTML = " ";
          }
          row.appendChild(cell);
        }
        if (j == 4) {
          if (peopleData[i].match(emailExp) != null) {
            cell.innerHTML = peopleData[i].match(emailExp)[0];
          } else {
            cell.innerHTML = " ";
          }
          row.appendChild(cell);
        }
        
      }
      table.appendChild(row);
    }
    // document.getElementById("content").value=''; //uncomment this line to delete the content of the input after each save 
    tdiv.innerHTML= '';//comment this line to append new tables under each other instead of replacement
    tdiv.appendChild(table);
  }
});
