function szétválogatás (tomb) {
  let i = 0;
  let j = 0;
  let k = 0;

  var negativtomb = [];
  var pozitivtomb = [];
  for (i; i < tomb.length; i++) {
    if (tomb[i] >= 0) {
      pozitivtomb[j] = tomb[i];
      j += 1;
    } else {
      negativtomb[k] = tomb[i];
      k++;
    }
  }
  return {pozitiv: pozitivtomb, negativ: negativtomb};
}
let tomb = [-1, -2, -3, 5, 6, 7, 8, 9, 9, -34];
console.log(szétválogatás(tomb));
