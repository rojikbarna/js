let tomb = [1, 3, 6, 78, 4, 4, 67, 78, 454356, 4, 456, 6];
let n = tomb.length;
for (let i = n - 1; i >= 0; i--) {
  for (let j = 0; j < n; j++) {
    if (tomb[j] > tomb[j + 1]) {
      let b = tomb[j + 1];
      tomb[j + 1] = tomb[j];
      tomb[j] = b;
    }
  }
}
console.log(tomb);
