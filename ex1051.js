var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var salario = parseFloat(lines.shift())

if (salario >= 0 && salario <= 2000){
    console.log("Isento");
}else if (salario > 2000 && salario <= 3000){
    console.log("R$ " + ((salario - 2000) * 0.08).toFixed(2));
}else if (salario > 3000 && salario <= 4500){
    console.log("R$" + ((((salario - 3000) * 0.18) + 80)).toFixed(2))
}else{
    console.log("R$" + (((salario - 4500) * 0.28) + 350).toFixed(2))
}