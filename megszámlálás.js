var tomb = [1, 2, 3, 45, 64, 56, 456, 45, 64, 56, 4, 6, 7, 5, 7, 45, 3, 45, 3, 53, 67, 567, 56, 35, 34, 5, 345];
let i = 0;
function szamlalo (hada) {
  let szamlalo = 0;
  for (i = 0; i < tomb.length; i++) {
    if (tomb[i] % 2 === 0) {
      szamlalo = szamlalo + 1;
    }
  }console.log('a páros számok db száma ', szamlalo);
}
szamlalo(tomb);
