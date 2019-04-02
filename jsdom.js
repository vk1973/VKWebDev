// declare variable and attache them to Ids from html
var btnadd = document.getElementById('div1btnadd');
var btndel = document.getElementById('div1btndel');
var lstinp = document.getElementById('inptxt');
var ul = document.querySelector("ul");


// Add iems to shopping list (input field and add item button)

function addshoppinglistitem()
  {
    if (lstinp.value.length >0){
      var linode = document.createElement('li');
      var litxtnode = document.createTextNode(lstinp.value);
      linode.appendChild(litxtnode);
      ul.appendChild(linode);
      linode.className= "liclass";
      lstinp.value="";
      
      adddeleteButton();
      listdivcolor();
    }
  }

//Set List Div background-color

function listdivcolor() {
  var div = document.querySelectorAll('ul > li');
  var divlilen = div.length;
  if (divlilen > 0) {
    document.getElementById("divlistid").style.backgroundColor = "rgb(242,232,139)";
  } else {
    document.getElementById("divlistid").style.backgroundColor = "rgb(176,207,238)";
  }
}


// Delete all shopping list items by clicking delete list button
function deleteshoppinglist(){
  var lidel  = document.querySelectorAll('ul > li');
  var lstlen = lidel.length;
  for (i= lstlen -1; i >=0 ; i--) {
    lidel[i].parentNode.removeChild(lidel[i]);
  }
}


// function to add delete button to all li items
function adddeleteButton(){
  var libtn  = document.querySelectorAll('ul > li');
  var lstbtnlen = libtn.length;
  for( i=0;i<lstbtnlen;i++){
  	var btn=document.createElement("button");
    btn.appendChild(document.createTextNode("X"));
    libtn[i].appendChild(btn);
    btn.className="delbtnclass";

    btn.addEventListener("click", function(e) {
      e.target.parentNode.remove();
      listdivcolor();
    });
  }
}


// Toggle strike through for each list line item
ul.addEventListener("click", function(e) {
if(e.target.tagName === "LI" ) {
e.target.classList.toggle("done");
}
})



btnadd.addEventListener("click", addshoppinglistitem);
btndel.addEventListener("click", deleteshoppinglist);

