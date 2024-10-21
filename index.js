var inputvalue = document.getElementById("input");

var first = document.getElementById("first");
var second = document.getElementById("second");
var result = document.getElementById("result");

document.getElementById("btn").onclick = function() {

  if(inputvalue.value == 0) {
    window.alert("you are not enter in any value");
  }

  else if(first.checked){
    temp = (9 * inputvalue.value + 160)/5;
    result.textContent = temp + "°F";
  }
  else if(second.checked) {
    temp = Math.ceil((5 * (inputvalue.value - 32))/9);
    result.textContent = temp + "°C";
  }
  else{
    result.textContent = "You are not select in any type";
  }
  
}
