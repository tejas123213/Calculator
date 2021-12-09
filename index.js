function clearScreen(){
  document.getElementById("result").value="";
}
function skn(value){
  let res = document.getElementById("result");
  if (res.vlaue=="undefined"){
    res.value="";
  }
  res.value+= value;
}
