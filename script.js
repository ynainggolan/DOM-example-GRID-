let colorSelected; 

//Adds a row
function addR() {
    //alert("Clicked Add Row")
    let grid = document.getElementById("grid");
    let rows = document.getElementsByTagName("tr");
    console.log(rows.length);
    
    if (rows.length === 0) {
        let row = document.createElement("tr");
        let col = document.createElement("td");
        col.onclick = function (){
            this.style.backgroundColor = colorSelected;
        };
        row.appendChild(col);
        grid.appendChild(row);
    }
    else{
        let numCols = rows[0].childElementCount;
        let row = document.createElement("tr");
        for(let i = 0; i < numCols; i++){
            let col = document.createElement("td");
            col.onlclick = function(){
                this.style.backgroundcolor = colorSelected;
            }
            row.appendChild(col);
        }
        grid.appendChild(row);
    }

/**
 *  else{
        let cols = document.getElementsByTagName("td");
        let row = document.createElement("tr");
        let col = document.createElement("td");
        for(let i = 0; i < rows.length; i++){
            //grid.appendChild(row);
            //row.appendChild(col);
            for(let j = 0; j < cols.length; j++){
                row.appendChild(col);
            }
            grid.appendChild(row);
        }
    }
 */
}
//Adds a column
function addC() {
    //alert("Clicked Add Col")
    let grid = document.getElementById("grid");
    let rows = document.getElementsByTagName("tr");

    if (rows.length === 0) {
        let row = document.createElement("tr");
        let col = document.createElement("td");
        col.onclick = function (){
            this.style.backgroundColor = colorSelected;
        };
        row.appendChild(col);
        grid.appendChild(row);
    }
    else{
        for(let i = 0; i < rows.lenght; i++){
            let col = document.createElement("td");
            col.onlclick = function(){
                this.style.backgroundcolor = colorSelected;
            }
            rows[i].appendChild(col);
        }
    }
}

//Removes a row
function removeR() {
    let grid = document.getElementById("grid");
    let rows = document.getElementById("tr");

    if(rows.length === 0){
        alert("Clicked Remove Row");
        return;
    }
    let lastRow = grid.lastElementChild;
    grid.removeChild(lastRow);
    //alert("Clicked Remove Row")
}
//Remove a column
function removeC() {
    alert("Clicked Remove Col")
}
//sets global var for selected color
function selected(){
    colorSelected = document.getElementById("selectedID").value;
    console.log(colorSelected);
}

function fill(){
    let cells = document.getElementsByTagName("td");
    for(let i = 0; i < rows.length; i++){
        for(let j = 0; j < cols.length; j++){
            this.style.backgroundColor = colorSelected;
        }
    }
    alert("Clicked Fill All")
}

function clearAll(){
    alert("Clicked Clear All")
}

function fillU(){
    alert("Clicked Fill All Uncolored")
}