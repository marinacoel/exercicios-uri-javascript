var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.trim().split('\n');

while(lines.length > 0){

    var expressao = lines.shift();

    var parentesesContador = 0;

    for(var i=0; i < expressao.length; i++){

        if(expressao[i] === '('){
            parentesesContador++;
        }else if(expressao[i] === ')'){
            parentesesContador--;
        }

        if(parentesesContador < 0){
            break;
        }
    }

    if(parentesesContador === 0){
        console.log("correct");
    }else{
        console.log("incorrect");
    }
}