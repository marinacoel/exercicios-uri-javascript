var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var A = parseFloat(lines.shift());
var B = parseFloat(lines.shift());
var C = parseFloat(lines.shift());

var delta = Math.pow(B, 2) - 4 * A * C;

if (delta < 0 || A == 0){
    console.log("Impossivel calcular")
} else {
    var R1 = (-1 * B + Math.sqrt(delta))/ (2 * A);
    var R2 = (-1 * B - Math.sqrt(delta))/ (2 * A);
    console.log("R1 = " + R1.toFixed(5))
    console.log("R2 = " + R2.toFixed(5))
}
