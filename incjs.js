var issueid = document.getElementById('issueid');
var issuet = document.getElementById('issuetitle');
var issuea = document.getElementById('application');
var issues = document.getElementById('status');
var issued = document.getElementById('issuedte');
var issuede = document.getElementById('issuedesc');
var subbtn = document.getElementById('incaddbtn');

//function to load the table upon window load with dummy issue list
function loadtable() {
    var action = "load";
    var incidentstart = 8000500;
    let today = new Date().toISOString().slice(0, 10)
    var seq = 0;
    var issuelist = [];
    var loadsize = 10
    for (i = 0; i < loadsize; i++) {
        var issue = {};
        seq = incidentstart + i;
        issue.id = 'IM' + seq;
        issue.title = 'Title_'+ i;
        issue.application = 'Application_'+ i;
        issue.status = 'Open';
        issue.cdate = today;
        issue.description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce semper eget augue et accumsan. In pellentesque libero a molestie ullamcorper. Nullam eget aliquet mi. Donec consequat magna ut ligula volutpat tincidunt. Ut fringilla neque eros, non auctor lacus congue quis. Sed vitae purus in ex luctus commodo. ';
        issuelist.push(issue);
      }
    createtable(issuelist, action);
    

    var tbl = document.querySelector("#table tbody");
    if (tbl != null) {
        for (var i = 0; i < tbl.rows.length; i++) {
            for (var j = 0; j < tbl.rows[i].cells.length; j++)
              if (j === 1) {
                tbl.rows[i].cells[j].onclick = function () { getval(this); };}
        }
    }

    function getval(cel) {
        alert(cel.innerHTML);
    }

}


//function attached to create incident html page will add screen inputs as a new issue
function createincident()
{
  var action = "create";
  var id = 0;
  var issue = {};
  var issuelist = [];
  var id = getlastimseq();
  id = id+1;
  issue.id= 'IM' + id;
  issue.title = issuet.value;
  issue.application = issuea.value;
  issue.status = issues.value;
  issue.cdate = issued.value;
  issue.description = issuede.value;
  issuelist.push(issue);
  createtable(issuelist, action);
  document.getElementById("divtable").style.display="block";
  document.getElementById("incadd").style.display="none";
}

//function creates a new row for every object in the array
function createtable(issuearray, command){
var tbody = document.querySelector("#table tbody");
issuearray.forEach((obj,i) => {
    
    if (command === "create"){
      var tableloaded = document.getElementById("table");
      var rowindex = tableloaded.rows.length-1;
      var tr = tbody.insertRow(rowindex);
    } else {
    var tr = tbody.insertRow(i);}
   
    Object.keys(obj).forEach((name, j) => {
      if (j === 0){ 
        var cell = tr.insertCell(j);
        cell.innerHTML = '<a href="#">'+obj[name]+'</a>';
      } else {
      var cell = tr.insertCell(j);
      cell.innerHTML = obj[name];}
    });

    //add edit option with a link to edit page

    // new column for edit row is now commented since an hyperlink has been added to the first column
    // var link = document.createElement("a");
    // link.setAttribute("href", "incedit.html")
    // link.className = "linkclass";
    // var linkText = document.createTextNode("Edit");
    // link.appendChild(linkText);

    // var newcell = tr.insertCell(-1);
    // newcell.appendChild(link);
    // tbody.appendChild(tr);
  });
  
  document.getElementById("table").className ="tabledivclass";
}

function getlastimseq() {
    var lastid=0;
    var tableloaded = document.getElementById("table");
    var rowindex = tableloaded.rows.length-1;
    var last = tableloaded.rows[rowindex].cells[0].innerHTML;

    lastid = last.substring(14,21);

    return parseInt(lastid);
}


function togglela(){
  if (this.innerHTML === "New Incident"){
    document.getElementById("incadd").style.display = "block";
    document.getElementById("divtable").style.display = "none";
  } else {
    document.getElementById("incadd").style.display = "none";
    document.getElementById("divtable").style.display = "block";
  }
}

window.onload = loadtable;
document.getElementById("incadd").style.display = "none";
subbtn.addEventListener("click", createincident);

var list = document.getElementById("navul").getElementsByTagName("li");

for (i = 0; i<list.length; i++) {
  list[i].addEventListener("click",togglela);
};

// var tbl = document.querySelector("#table tbody");
//     if (tbl != null) {
//         for (var i = 0; i < tbl.rows.length; i++) {
//             for (var j = 0; j < tbl.rows[i].cells.length; j++)
//                 tbl.rows[i].cells[j].onclick = function () { getval(this); };
//         }
//     }

//     function getval(cel) {
//         alert(cel.innerHTML);
//     }
