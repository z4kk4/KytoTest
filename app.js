const sButton = document.getElementById("sButton");
const oTable = document.getElementById("utputTable");
let peopleCount;
const providedData = [];
sButton.addEventListener('click', (event)=>{
    event.preventDefault();
    if(document.getElementById("content").value ==null){
    alert("Please enter correct data");
    document.getElementById("content").style.display ="none";
    }else{
        const content= document.getElementById("content").value.trim();
        peopleCount=content.split(/\r\n|\r|\n/).length;
        peopleData=content.split('\n');
        
        for (let i=0; i<peopleCount; i++){
            providedData.push(peopleData[i].split(' '));
        }
        console.log(providedData);
        
        
        const table=document.createElement("table");
        for (let i=0; i<peopleCount; i++){
            const row=document.createElement("tr");
            for (let j=0;j<5;j++){
                const cell=document.createElement("td");
                cell.innerHTML=providedData[i][j];
                row.appendChild(cell);
            }
            table.appendChild(row);    
        }
        document.body.appendChild(table)
    }
    
})