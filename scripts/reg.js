function namecheck() {
  document.getElementById("name").style.color="white";
  document.getElementById("name").style.backgroundColor="black";
  document.getElementById("nc").innerHTML="Every word should start with captial letter and should have space between them"

}

function snamecheck() {
  document.getElementById("name").style.color="black";
  document.getElementById("name").style.backgroundColor="white";
  document.getElementById("nc").innerHTML="";

}
function numbercheck() {
  document.getElementById("num").style.color="white";
  document.getElementById("num").style.backgroundColor="black";
  document.getElementById("rc").innerHTML="number should be in format 1218103120[1-9][1-9]"

}

function snumbercheck() {
  document.getElementById("num").style.color="black";
  document.getElementById("num").style.backgroundColor="white";
  document.getElementById("rc").innerHTML="";

}
function checkingnc() {
 var  a=document.getElementById("name").value;
  if(a.search(/^[A-Z][a-z]+ ?$/)==0)
  alert("name is valid");
  else alert("not valid")
}

function checkingrc() {

  var b=document.getElementById("num").value;
  if(b.search(/^121810312(00[1-9]|0[1-5][0-9]|06[0-6])$/)==0)
  alert("number is valid");
  else alert("number not valid")
}
