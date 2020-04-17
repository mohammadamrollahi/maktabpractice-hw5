function mapRange(firstRang, secRang, num) {
  let coefficient = (firstRang[0] + firstRang[1]) / num;
  let output = (secRang[0] + secRang[1]) / coefficient;
  return output;
}
console.log(mapRange([10, 30], [20, 40], [20]));
