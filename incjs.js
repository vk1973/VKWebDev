var issueid = document.getElementById('issueid');
var issuet = document.getElementById('issuetitle');
var issuea = document.getElementById('application');
var issues = document.getElementById('status');
var issued = document.getElementById('issuedte');
var issuede = document.getElementById('issuedesc');
var subbtn = document.getElementById('incaddbtn');

//function to load the table upon window load with dummy issue list
function loadtable() {
    // var issueid = "IM8000500";
    let today = new Date().toISOString().slice(0, 10)
    var seq = 0;
    var issuelist = [];
    var loadsize = 10
    for (i = 0; i < loadsize; i++) {
        var issue = {};
        seq = issueid + i;
        issue.id = 'IM' + seq;
        issue.title = 'Title_'+ i;
        issue.application = 'Application_'+ i;
        issue.status = 'Open';
        issue.cdate = today;
        issue.description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce semper eget augue et accumsan. In pellentesque libero a molestie ullamcorper. Nullam eget aliquet mi. Donec consequat magna ut ligula volutpat tincidunt. Ut fringilla neque eros, non auctor lacus congue quis. Sed vitae purus in ex luctus commodo. ';
        issuelist.push(issue);
      }
    createtable(issuelist);
    // var tableloaded = document.getElementById("table");
    // var rowindex = tableloaded.rows.length-1;
    // issueid = tableloaded.rows[rowindex].cells[0];
    // return (issueid+loadsize-1);
    document.getElementById("incadd").style.display = "none";
    document.getElementById("divtable").className ="tabledivclass";
}


//function attached to create incident html page will add screen inputs as a new issue
function createincident()
{
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
  createtable(issuelist);
}

//function creates a new row for every object in the array
function createtable(issuearray){
var tbody = document.querySelector("#table tbody");
issuearray.forEach((obj,i) => {
    var tr = tbody.insertRow(i);
    Object.keys(obj).forEach((name, j) => {
      var cell = tr.insertCell(j);
      cell.innerHTML = obj[name];
    });

    //add edit option with a link to edit page
    var link = document.createElement("a");
    link.setAttribute("href", "incedit.html")
    link.className = "linkclass";
    var linkText = document.createTextNode("Edit");
    link.appendChild(linkText);

    var newcell = tr.insertCell(-1);
    newcell.appendChild(link);
    tbody.appendChild(tr);
  });
}

function getlastimseq() {
    var lastid=0;
    var tableloaded = document.getElementById("table");
    var rowindex = tableloaded.rows.length-1;
    var last = tableloaded.rows[rowindex].cells[0].innerHTML;

    var lastid = last.substring(2,9);

    return parseInt(lastid);
}


var incidentstart = 8000500;
window.onload = loadtable;
subbtn.addEventListener("click", createincident);
