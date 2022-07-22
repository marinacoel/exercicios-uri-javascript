var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let valor = parseInt(input);

const notas = [100, 50, 20, 10, 5, 2, 1];

console.log(valor);

for (let nota of notas) {
    let qntdNotas = parseInt(valor / nota);
    console.log(`${qntdNotas} nota(s) de ${nota},00`);
    valor = valor % nota;
}