let i = 0;
let j = 0;
let k = 0;
let tombegy = [1, 2, 3, 4, 5];
let tombketto = [1, 2, 4, 5, 7, 8, 9];
let n = tombegy.length;
let m = tombketto.length;
let tombunio = [];
for (i; i < tombegy.length; i++) {
  tombunio[i] = tombegy[i];
}
k = n;

for (j = 0; j <= m - 1; j++) {
  i = 0;
  while (i < n && tombketto[j] !== tombegy[i]) {
    i++;
  }
  if (i >= n) {
    tombunio[k] = tombketto[j];
    k++;
  }
}
console.log(tombunio);
