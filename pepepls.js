let matrix1 = [['_', '_', '_', '_', '_', '_', '_', '_', '_', '_', '█', '█', '█', '█', '█', '█', '█', '█', '_', '_', '_', '_', '_', '█', '█', '█', '█', '█', '█'],
  ['_', '_', '_', '_', '_', '_', '_', '_', '_', '█', '░', '░', '░', '░', '░', '░', '░', '░', '█', '█', '_', '█', '█', '░', '░', '░', '░', '░', '░', '█'],
  ['_', '_', '_', '_', '_', '_', '_', '_', '█', '░', '░', '░', '░', '░', '░', '░', '░', '░', '░', '░', '█', '░', '░', '░', '░', '░', '░', '░', '░', '░', '█'],
  ['_', '_', '_', '_', '_', '_', '_', '█', '░', '░', '░', '░', '░', '░', '░', '█', '█', '█', '░', '░', '░', '█', '░', '░', '░', '░', '░', '░', '░', '░', '░', '█'],
  ['_', '_', '_', '_', '_', '_', '_', '█', '░', '░', '░', '░', '█', '█', '█', '░', '░', '░', '█', '█', '█', '░', '█', '░', '░', '░', '█', '█', '█', '█', '░', '█'],
  ['_', '_', '_', '_', '_', '_', '█', '░', '░', '░', '█', '█', '░', '░', '░', '░', '░', '░', '░', '░', '█', '█', '█', '░', '█', '█', '░', '░', '░', '░', '█', '█'],
  ['_', '_', '_', '_', '_', '█', '░', '░', '░', '░', '░', '░', '░', '░', '░', '░', '░', '░', '░', '░', '░', '░', '░', '█', '░', '░', '░', '░', '░', '░', '░', '░', '█', '█', '█'],
  ['_', '_', '_', '_', '█', '░', '░', '░', '░', '░', '░', '░', '░', '░', '░', '░', '░', '░', '█', '█', '█', '█', '█', '█', '░', '░', '░', '░', '░', '█', '█', '█', '█', '░', '░', '█'],
  ['_', '_', '_', '_', '█', '░', '░', '░', '░', '░', '░', '░', '░', '░', '█', '█', '█', '█', '█', '░', '░', '░', '█', '█', '█', '█', '░', '░', '█', '█', '░', '░', '█', '█', '░', '░', '█'],
  ['_', '_', '_', '█', '█', '░', '░', '░', '░', '░', '░', '░', '█', '█', '█', '░', '░', '░', '░', '░', '░', '░', '░', '░', '░', '█', '░', '░', '░', '░', '░', '░', '░', '░', '█', '█', '█'],
  ['_', '_', '█', '░', '░', '░', '░', '░', '░', '░', '░', '░', '░', '░', '░', '░', '░', '█', '█', '█', '█', '█', '█', '█', '█', '█', '░', '░', '░', '█', '█', '█', '█', '█', '█', '█', '█', '█'],
  ['_', '█', '░', '░', '░', '░', '░', '░', '░', '░', '░', '░', '█', '█', '█', '█', '█', '_', '█', '█', '█', '█', '█', '_', '_', '█', '█', '█', '█', '_', '█', '█', '█', '█', '█', '_', '_', '_', '█'],
  ['_', '█', '░', '░', '░', '░', '░', '░', '░', '░', '░', '░', '█', '_', '_', '_', '_', '_', '█', '_', '█', '█', '█', '_', '_', '█', '_', '_', '_', '█', '█', '█', '█', '_', '█', '█', '_', '_', '_', '█'],
  ['█', '░', '░', '░', '░', '░', '░', '░', '░', '░', '░', '░', '░', '█', '_', '_', '_', '█', '█', '█', '█', '_', '█', '█', '█', '█', '_', '_', '_', '_', '█', '█', '_', '█', '█', '█', '█', '█', '█'],
  ['░', '░', '░', '░', '░', '░', '░', '░', '░', '░', '░', '░', '░', '█', '█', '█', '█', '█', '█', '█', '█', '█', '░', '░', '░', '█', '█', '█', '█', '█', '█', '█', '█', '░', '░', '░', '█'],
  ['░', '░', '░', '░', '░', '░', '░', '░', '░', '░', '░', '░', '░', '░', '░', '░', '█', '░', '░', '░', '░', '░', '█', '░', '░', '░', '░', '░', '░', '░', '░', '░', '░', '░', '░', '█'],
  ['░', '░', '░', '░', '░', '░', '░', '░', '░', '░', '░', '░', '░', '░', '░', '░', '░', '░', '░', '░', '█', '█', '░', '░', '░', '░', '█', '░', '░', '░', '░', '░', '░', '█', '█'],
  ['░', '░', '░', '░', '░', '░', '░', '░', '░', '░', '░', '░', '░', '░', '░', '░', '░', '░', '█', '█', '░', '░', '░', '░', '░', '░', '░', '█', '█', '█', '█', '█', '█', '█'],
  ['░', '░', '░', '░', '░', '░', '░', '░', '░', '░', '░', '░', '░', '░', '░', '░', '█', '█', '░', '░', '░', '░', '░', '░', '░', '░', '░', '░', '█', '░', '░', '░', '░', '░', '█'],
  ['░', '░', '░', '░', '░', '░', '░', '░', '░', '░', '░', '░', '░', '░', '░', '░', '░', '░', '░', '░', '░', '░', '░', '░', '░', '░', '░', '░', '░', '░', '░', '░', '░', '░', '░', '█'],
  ['░', '░', '░', '░', '░', '░', '░', '░', '░', '░', '░', '░', '░', '░', '░', '░', '░', '░', '░', '░', '░', '░', '░', '░', '░', '░', '░', '░', '░', '░', '░', '░', '░', '░', '░', '█'],
  ['░', '░', '░', '░', '░', '░', '░', '░', '░', '░', '░', '░', '░', '░', '░', '░', '░', '░', '░', '░', '░', '░', '░', '░', '░', '░', '░', '░', '░', '░', '░', '░', '░', '░', '░', '█'],
  ['░', '░', '░', '░', '░', '░', '░', '░', '░', '░', '░', '█', '█', '█', '█', '█', '█', '█', '█', '█', '░', '░', '░', '░', '░', '░', '░', '░', '░', '░', '░', '░', '░', '░', '█', '█'],
  ['░', '░', '░', '░', '░', '░', '░', '░', '░', '░', '█', '▒', '▒', '▒', '▒', '▒', '▒', '▒', '▒', '█', '█', '█', '█', '█', '█', '█', '█', '█', '█', '█', '█', '█', '█', '█', '▒', '▒', '█'],
  ['░', '░', '░', '░', '░', '░', '░', '░', '░', '█', '▒', '▒', '█', '█', '█', '█', '█', '█', '█', '▒', '▒', '▒', '▒', '▒', '▒', '▒', '▒', '▒', '▒', '▒', '▒', '▒', '▒', '▒', '▒', '▒', '█'],
  ['░', '░', '░', '░', '░', '░', '░', '░', '░', '█', '▒', '▒', '▒', '▒', '▒', '▒', '▒', '▒', '▒', '█', '█', '█', '█', '█', '█', '█', '█', '█', '█', '█', '█', '█', '█', '█', '█', '█'],
  ['░', '░', '░', '░', '░', '░', '░', '░', '░', '░', '█', '█', '█', '█', '█', '█', '█', '█', '▒', '▒', '▒', '▒', '▒', '▒', '▒', '▒', '▒', '▒', '▒', '▒', '▒', '▒', '▒', '▒', '▒', '▒', '█'],
  ['░', '░', '░', '░', '░', '░', '░', '░', '░', '░', '░', '░', '░', '░', '░', '░', '░', '░', '█', '█', '█', '█', '█', '█', '█', '█', '█', '█', '█', '█', '█', '█', '█', '█', '█', '█'],
  ['░', '░', '░', '░', '░', '░', '░', '░', '░', '░', '░', '░', '░', '░', '░', '░', '░', '░', '░', '░', '░', '░', '░', '░', '░', '░', '░', '░', '░', '░', '░', '█'],
  ['█', '█', '░', '░', '░', '░', '░', '░', '░', '░', '░', '░', '░', '░', '░', '░', '░', '░', '░', '░', '░', '░', '░', '░', '░', '░', '░', '░', '░', '█', '█'],
  ['▓', '█', '█', '░', '░', '░', '░', '░', '░', '░', '░', '░', '░', '░', '░', '░', '░', '░', '░', '░', '░', '░', '░', '░', '░', '░', '░', '█', '█'],
  ['▓', '▓', '▓', '█', '█', '█', '░', '░', '░', '░', '░', '░', '░', '░', '░', '░', '░', '░', '░', '░', '░', '░', '░', '░', '░', '░', '█'],
  ['▓', '▓', '▓', '▓', '▓', '▓', '█', '█', '█', '░', '░', '░', '░', '░', '░', '░', '░', '░', '░', '░', '░', '░', '░', '░', '█', '█'],
  ['▓', '▓', '▓', '▓', '▓', '▓', '▓', '▓', '▓', '█', '█', '█', '█', '█', '█', '█', '█', '█', '█', '█', '█', '█', '█', '█', '▓', '▓', '█'],
  ['▓', '▓', '▓', '▓', '▓', '▓', '▓', '▓', '▓', '▓', '▓', '▓', '▓', '▓', '▓', '▓', '▓', '▓', '▓', '▓', '▓', '▓', '▓', '▓', '▓', '▓', '▓', '█', '█'],
  ['▓', '▓', '▓', '▓', '▓', '▓', '▓', '▓', '▓', '▓', '▓', '▓', '▓', '▓', '▓', '▓', '▓', '▓', '▓', '▓', '▓', '▓', '▓', '▓', '▓', '▓', '▓', '▓', '█'],
  ['▓', '▓', '▓', '▓', '▓', '▓', '▓', '▓', '▓', '▓', '▓', '▓', '▓', '▓', '▓', '▓', '▓', '▓', '▓', '▓', '▓', '▓', '▓', '▓', '▓', '▓', '▓', '▓', '▓', '█']];

function matrixozas (matrix) {
  for (let i = 0; i < matrix.length; i++) {
    var row = '';
    for (let j = 0; j < matrix[i].length; j++) {
      row += matrix[i][j];
    }
    console.log(row);
  }
}
matrixozas(matrix1);
