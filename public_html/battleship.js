var myBoard = [[0,0,0,0,0,0,0,0,0],[0,1,0,0,0,0,0,0,0],[0,0,0,0,1,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0],[0,0,1,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],
    [0,0,1,0,0,0,0,0,0],[0,0,0,1,0,0,0,0,0]];

var computerBoard = [[0,0,0,1,0,0,0,1,0],[0,0,0,0,1,0,0,0,1],[1,0,0,0,1,0,0,0,0],
    [1,0,0,0,1,0,0,0,0],[0,0,0,1,0,0,0,1,0],[0,1,0,0,0,1,0,0,0],[0,1,0,0,0,0,1,0,0],
    [1,0,0,0,1,0,0,0,0],[0,1,0,0,1,0,0,1,0]];

var computerShots = [[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0]];

var lastCell;

function start(){
    generate_table("tableOne");
    generate_table("tableTwo");
    
    // Generate ships
    for (var i = 0, max = 8; i < max; i++) {
        for(var j = 0, jmax = 8; j<jmax;j++)
            if (myBoard[i][j] === 1){
                change_cell(i,j,'Images/battleship01.jpg');
                change_cell(i,j+1,'Images/battleship02.jpg');
                change_cell(i,j+2,'Images/battleship03.jpg');
                change_cell(i,j+3,'Images/battleship04.jpg');
            }
    }
}

function generate_table(myID) {
  // get the reference for the body
  var body = document.getElementsByTagName("body")[0];
 
  // creates a <table> element and a <tbody> element
  var tbl     = document.createElement("table");
  var tblBody = document.createElement("tbody");
  tbl.setAttribute("id",myID);
  
  tbl.style.display = "inline-block";
  tbl.style.display = "float: left";
  
  // creating all cells
  for (var i = 0; i < 9; i++) {
    // creates a table row
    var row = document.createElement("tr");
 
    for (var j = 0; j < 9; j++) {
      // Create a <td> element and a text node, make the text
      // node the contents of the <td>, and put the <td> at
      // the end of the table row
      var cell = document.createElement("td");
      var a = document.createElement('a');
      
//      var linkText = document.createTextNode("("+i+","+j+")");
//      var imageLink = document. 

      var img = document.createElement('img');
      img.src = 'Images/waterTile.jpg';
      a.appendChild(img);
//      a.title = "test";
      if(myID === "tableOne"){
        var jLink = "javascript:make_move("+i+","+j+");";
        a.href = jLink;
      }
      
      cell.appendChild(a);
      row.appendChild(cell);
    }
 
    // add the row to the end of the table body
    tblBody.appendChild(row);
  }
 
  // put the <tbody> in the <table>
  tbl.appendChild(tblBody);
  // appends <table> into <body>
  body.appendChild(tbl);
  // sets the border attribute of tbl to 2;
  tbl.setAttribute("border", "6");

}

function change_cell(row,col,myImage){
   document.getElementById("tableTwo").rows[row].cells[col].innerHTML = 
           '<img src = ' + myImage + '>';
}

function make_move(row,col){
    if(computerBoard[row][col]=== 1){
        document.getElementById("tableOne").rows[row].cells[col].innerHTML =
           "<img src = 'Images/water_red.jpg'>";
//        hit_cell(row,col); // Register a hit
        
    }else {
   document.getElementById("tableOne").rows[row].cells[col].innerHTML =
           "<img src = 'Images/water_grey.jpg'>";
    }
    testFunction();
}

function hit_cell(row,col){
    // Mark cell as hit
    // Check to see if battleship sunk
    // Check to see if ALL battleships sunk
    // If all battleships sunk, player wins
}

function ComputerMoves() {
    var redBox = "<img src = 'Images/water_red.jpg'>"; // Computer hit
    var greyBox = "<img src = 'Images/water_grey.jpg'>"; // Computer miss
    var openWater = "<img src = 'Images/waterTile.jpg'>"; // Not tested
    var waterTileFileName = "waterTile";
    
    // The four images that make up a battleship
    var battleShip01 = "battleship01";
    var battleShip02 = "battleship02";
    var battleShip03 = "battleship03";
    var battleShip04 = "battleship04";
    
    // The four images that make up a hit battleship
    var battleship_red01 = "<img src='Images/battleship_red01.jpg'>";
    var battleship_red02 = "<img src='Images/battleship_red02.jpg'>";
    var battleship_red03 = "<img src='Images/battleship_red03.jpg'>";
    var battleship_red04 = "<img src='Images/battleship_red04.jpg'>";
    
    if(ComputerMoves.noTargetSelected === undefined){
        ComputerMoves.targetSelected = true;
    }
    if(ComputerMoves.table === undefined){
         ComputerMoves.table = document.getElementById('tableTwo');   
    }
    if(ComputerMoves.randomRow === undefined){
        ComputerMoves.randomRow = Math.floor(Math.random() * 9);
    }
    if(ComputerMoves.randomCol === undefined){
        ComputerMoves.randomCol = Math.floor(Math.random() * 9);
    }
    if(ComputerMoves.currentCol === undefined){
        ComputerMoves.currentCol = 0;
    }
    if(ComputerMoves.currentRow === undefined){
        ComputerMoves.currentRow = 0;
    }
    if(ComputerMoves.hitTarget === undefined){
        ComputerMoves.hitTarget = {
            targetFound: false,
            targetCol:0,
            targetRow:0
        };
    }
    
    while(ComputerMoves.noTargetSelected){
        
        var cellSelected = ComputerMoves.table.rows[ComputerMoves.randomRow]
                .cells[ComputerMoves.randomCol].innerHTML;
        
        if (computerShots[ComputerMoves.randomRow][ComputerMoves.randomCol] === 1){ // Cell already selected
            // Try again
            ComputerMoves.randomCol = Math.floor(Math.random() * 9);
            ComputerMoves.randomCol = Math.floor(Math.random() * 9);
        }else {
            ComputerMoves.noTargetSelected = false; // Valid target found
        }
    }
    // Replace last cell if current cell is not 0
    if(ComputerMoves.currentCol- 1 >=0){
        ComputerMoves.table.rows[ComputerMoves.currentRow].cells[ComputerMoves.currentCol-1]
            .innerHTML = ComputerMoves.lastCel;
    }
    
    // Replace last cell in previous row
    if(ComputerMoves.currentRow > 0 && ComputerMoves.currentCol === 0){
        ComputerMoves.table.rows[ComputerMoves.currentRow-1].cells[8]
            .innerHTML = ComputerMoves.lastCel;
    }
//    console.log(ComputerMoves.currentRow+", "+ComputerMoves.currentCol);
    ComputerMoves.lastCel = ComputerMoves.table.rows[ComputerMoves.currentRow]
            .cells[ComputerMoves.currentCol].innerHTML;
    
//    console.log("Content in row:"+ComputerMoves.currentRow+" col:"+ComputerMoves.currentCol + " = "+ ComputerMoves.lastCel);
    ComputerMoves.table.rows[ComputerMoves.currentRow].cells[ComputerMoves.currentCol]
            .innerHTML = redBox;
    
    if (ComputerMoves.currentRow === ComputerMoves.randomRow && ComputerMoves.currentCol === ComputerMoves.randomCol) {
        
        // This is where we check for hit or miss
        
        // Remember current attempt
        computerShots[ComputerMoves.currentRow][ComputerMoves.currentCol] = 1;
        var targetCell = ComputerMoves.lastCel;
        var tileName = targetCell.substr(17,12);
        switch (tileName){
            case battleShip01:
                ComputerMoves.table.rows[ComputerMoves.currentRow].cells[ComputerMoves.currentCol]
                        .innerHTML = battleship_red01;
                break;
            case battleShip02:
                ComputerMoves.table.rows[ComputerMoves.currentRow].cells[ComputerMoves.currentCol]
                        .innerHTML = battleship_red02;
                break;
            case battleShip03:
                ComputerMoves.table.rows[ComputerMoves.currentRow].cells[ComputerMoves.currentCol]
                        .innerHTML = battleship_red03;
                break;
            case battleShip04:
                ComputerMoves.table.rows[ComputerMoves.currentRow].cells[ComputerMoves.currentCol]
                        .innerHTML = battleship_red04;
                break;
            default:
                // Not hit, make square grey
                ComputerMoves.table.rows[ComputerMoves.currentRow].cells[ComputerMoves.currentCol]
                        .innerHTML = greyBox;
                
        }
        clearInterval(myVar);
        // Reset all variables
        ComputerMoves.currentCol = undefined;
        ComputerMoves.currentRow = undefined;
        ComputerMoves.randomCol = undefined;
        ComputerMoves.randomRow = undefined;
        return;
    }
    
    
    ComputerMoves.currentCol++;
    if(ComputerMoves.currentCol > 8){
        ComputerMoves.currentRow++;
        if(ComputerMoves.currentRow > 8){
            clearInterval(myVar);
            // Reset all variables to undefined
            ComputerMoves.currentCol = undefined;
            ComputerMoves.currentRow = undefined;
            ComputerMoves.randomCol = undefined;
            ComputerMoves.randomRow = undefined;
        }else{
            ComputerMoves.currentCol = 0;
        }
    }
}

var myVar;

function testFunction() {
    myVar = setInterval(ComputerMoves, 100);
}

function alertFunc() {
    alert("Hello!");
    clearInterval(myVar);
}

//var startTime = new Date().getTime(),
//    elapsed = '0.0',timeElapsed;

//window.setInterval(function()
//{
//    timeElapsed = new Date().getTime() - startTime;
//
//    elapsed = Math.floor(timeElapsed / 100) / 10;
//    if(Math.round(elapsed) == elapsed) { elapsed += '.0'; }
////    console.log(elapsed);
//
//}, 100);
