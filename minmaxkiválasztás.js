let tomb = [1, 2, 4, 58, 8, 9, 656, 45, 76];
let i = 0;
let max = tomb[0];
let min = tomb[0];
for (i = 0; i < tomb.length; i++) {
  if (tomb[i] > max) {
    max = tomb[i];
  }
}
for (i; i < tomb.length; i++) {
  if (tomb[i] < min) {
    min = tomb[i];
  }
}
console.log(max);
console.log(min);
