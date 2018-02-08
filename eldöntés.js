let tomb = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let ker = 5;
let i = 0;
while (i < tomb.length && tomb[i] !== ker) {
  i++;
}
if (i < tomb.length) {
  console.log('van ilyen érték');
} else {
  console.log('nicncs yilen érték ');
}

// tasi funcitonbe
const decision = (tomb, s) => {
  let i = 0;
  while (i < tomb.length && tomb[i] !== s) {
    i++;
  }
  return i < tomb.length;
};
if (i < tomb.length) {
  console.log('van iylen érték ');
} else {
  console.log('ncins iylen érték ');
}
decision(tomb, ker);
