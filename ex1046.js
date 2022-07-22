var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split(' ');

var horaInicio = parseInt(lines.shift());
var horaFim = parseInt(lines.shift());

if(horaInicio > horaFim){
    var duracao = (24 - horaInicio) + horaFim;
}else{
    var duracao = horaFim - horaInicio;
}

console.log("O JOGO DUROU " + duracao + " HORA(S)");