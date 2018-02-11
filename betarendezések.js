let tomb = [1, 2, 3, 45, 5, 534, 6, 7, 4, 48, 86, 78];
for (let i = 0; i < tomb.length; i++) {
  let min = i;
  for (let j = i + 1; j < tomb.length; j++) {
    if (tomb[j] < tomb[min]) {
      min = j;
    }
  }
  if (min !== i) {
    let temp = tomb[i];
    tomb[i] = tomb[min];
    tomb[min] = temp;
  }
}
console.log(tomb);
