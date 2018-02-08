function metszet (tombegy, tombketto) {
  let i = 0;
  let k = 0;
  let tombmetszet = [];

  for (i; i < tombegy.length; i++) {
    let j = 0;
    while (j < tombketto.length && tombegy[i] !== tombketto[j]) {
      j++;
    }
    if (j < tombketto.length) {
      tombmetszet[k] = tombegy[i];
      k++;
    }
  }
  return tombmetszet;
}
let tomb1 = [1, 2, 3, 4];
let tomb2 = [3, 4, 5, 6];
console.log(metszet(tomb1, tomb2));
