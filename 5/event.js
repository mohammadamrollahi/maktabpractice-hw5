let arr = [];
while (arr.length < 20) {
  let myRandom = Math.floor(Math.random() * 60000) + 1000;
  if (arr.indexOf(myRandom) === -1) arr.push(myRandom);
}
console.log(arr);
