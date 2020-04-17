let myInput = ".._.._.";
console.log(checkUser(myInput));
function checkUser(myInput) {
  let val = true;
  for (let i = 0; i < myInput.length; i++) {
    if (myInput[i] == "." || myInput[i] == "_") val = true;
    else {
      val = false;
      break;
    }
  }
  if (myInput.length <= 9 && myInput.length >= 3 && val) return "valid";
  else return "invalid";
}
