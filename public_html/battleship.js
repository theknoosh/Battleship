var myBoard = [[0,0,0,0,0,0,0,0,0],[0,1,0,0,0,0,0,0,0],[0,0,0,0,1,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0],[0,0,1,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],
    [0,0,1,0,0,0,0,0,0],[0,0,0,1,0,0,0,0,0]];

var computerBoard = [[0,0,0,1,0,0,0,1,0],[0,0,0,0,1,0,0,0,1],[1,0,0,0,1,0,0,0,0],
    [1,0,0,0,1,0,0,0,0],[0,0,0,1,0,0,0,1,0],[0,1,0,0,0,1,0,0,0],[0,1,0,0,0,0,1,0,0],
    [1,0,0,0,1,0,0,0,0],[0,1,0,0,1,0,0,1,0]];

function start(){
    generate_table("tableOne");
    generate_table("tableTwo");
    
    // Generate ships
    for (var i = 0, max = 8; i < max; i++) {
        for(var j = 0, jmax = 8; j<jmax;j++)
            if (myBoard[i][j] === 1){
                change_cell(i,j,"Images/battleship01.jpg");
                change_cell(i,j+1,"Images/battleship02.jpg");
                change_cell(i,j+2,"Images/battleship03.jpg");
                change_cell(i,j+3,"Images/battleship04.jpg");
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
      img.src = "Images/waterTile.jpg";
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
           "<img src = " + myImage + ">";
}

function make_move(row,col){
    if(computerBoard[row][col]=== 1){
        document.getElementById("tableOne").rows[row].cells[col].innerHTML =
           "<img src = 'Images/water_red.jpg'>";
    }else {
   document.getElementById("tableOne").rows[row].cells[col].innerHTML =
           "<img src = 'Images/water_grey.jpg'>";
    }
}