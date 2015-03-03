function start(){
    generate_table("tableOne");
    generate_table("tableTwo");
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
      
      var linkText = document.createTextNode("("+i+","+j+")");
      a.appendChild(linkText);
      a.title = "test";
      var jLink = "javascript:change_cell("+i+","+j+");";
      console.log(jLink);
      a.href = jLink;
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
  tbl.setAttribute("border", "2");

}

function change_cell(row,col){
   document.getElementById("tableTwo").rows[row].cells[col].style.backgroundColor = "red"; 
}