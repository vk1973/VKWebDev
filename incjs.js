var issueid = document.getElementById('issueid');
var issuet = document.getElementById('issuetitle');
var issued = document.getElementById('issuedte');
var issuea = document.getElementById('application');
var issuede = document.getElementById('issuedesc');
var subbtn = document.getElementById('incaddbtn');

alert(issued);
subbtn.addEventListener("click", function(e) {
  var issue = {};

  var issuelist = [];
  issue.id=1;
  issue.title = issuet.value;
  issue.cdate = issued.value;
  issue.application = issuea.value;
  issue.description = issuede.value;
  issuelist.push(issue);

  var html = "<table border 1|1>";
  for (var i = 0; i < issuelist.length; i++) {
        html+="<tr>";
        html+="<td>"+issuelist[i].id+"</td>";
        html+="<td>"+issuelist[i].title+"</td>";
        html+="<td>"+issuelist[i].cdate+"</td>";
        html+="<td>"+issuelist[i].application+"</td>";
        html+="<td>"+issuelist[i].description+"</td>";

        html+="</tr>";

    }
    html+="</table>";
document.getElementById("table").innerHTML = html;
})
