function mapRange(firstRang, secRang, num) {
  if (num >= firstRang[0] && num <= firstRang[1]) {
    return (
      ((num - firstRang[0]) / (firstRang[1] - firstRang[0])) *
        (secRang[1] - secRang[0]) +
      secRang[0]
    );
  } else {
    return "not in rang";
  }
}
console.log(mapRange([1, 100], [1, 5], 70));
