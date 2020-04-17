let arr = [3, 13, 7, 1];
console.log(shuffleArr(arr));

function shuffleArr(arr) {
  let newArr = [];
  let counterArr = [];
  while (counterArr.length < arr.length) {
    let myRandom = Math.floor(Math.random() * arr.length);
    debugger;
    if (counterArr.indexOf(myRandom) === -1) counterArr.push(myRandom);
  }
  for (let i = 0; i < arr.length; i++) {
    newArr[i] = arr[counterArr[i]];
  }
  return newArr;
}
