const sButton = document.getElementById("sButton");
const oTable = document.getElementById("utputTable");
let peopleCount;
const providedData = [];

const emailExp = /\S+@\S+\.\S+/;
const titleExp = /^\b[mM](r|iss|s|rs)\b/i;
// const nameExp = /\S+/g; //to be tested more to return 1st and 2nd name
const nameExpT = /\s\b[a-zA-Z]+ [a-zA-Z]+\b/gi; // name if there's a title
const nameExp = /\s?\b[a-zA-Z]+ [a-zA-Z]+\b/gi; // name if there's no title still not wokring with m Harry Potter
//[\s+]?
//[^]?
//(?!mr|miss|ms|mrs)+
const numExp =
  /\b[\+]?[(]?[0-9]{3,4}[)]?[-\s\.]?[0-9]{3,4}[-\s\.]?[0-9]{3,6}\b/i; //works but needs to be tuned

sButton.addEventListener("click", (event) => {
  event.preventDefault();
  if (document.getElementById("content").value.trim() == '') {
    alert("Please enter correct data");
    
  } else {
    const content = document.getElementById("content").value.trim();
    peopleCount = content.split(/\r\n|\r|\n/).length;
    peopleData = content.split("\n");

    // for (let i=0; i<peopleCount; i++){
    //     providedData.push(peopleData[i].split(' '));
    // }
    // console.log(providedData);

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
            //cell.innerHTML=peopleData[i].match(nameExpT)[0].trim().split(' ')[0];
            if (peopleData[i].match(titleExp) == null) {
              cell.innerHTML = peopleData[i]
                .match(nameExp)[0]
                .trim()
                .split(" ")[0];//this should recieve all the string but the last one that is supposed to be last name 
            } else {
              cell.innerHTML = peopleData[i]
                .match(nameExpT)[0]
                .trim()
                .split(" ")[0];
            }
          } else {
            cell.innerHTML = " ";
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
                .split(" ")[1];//this should recieve the last string in the array that is supposed to be last name 
            } else {
              cell.innerHTML = peopleData[i]
                .match(nameExpT)[0]
                .trim()
                .split(" ")[1];
            }
          } else {
            cell.innerHTML = " ";
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
        // cell.innerHTML=providedData[i][j];
        // row.appendChild(cell);
      }
      table.appendChild(row);
    }
    document.body.appendChild(table);
  }
});
