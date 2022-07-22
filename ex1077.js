function verificaPrioridade(elemento){

    switch(elemento){
        case '+':
        case '-':
            return 1;
          
        case '*':
        case '/':
            return 2;
          
        case '^':
            return 3;
          
        default:
            return 0;
    }
}
    
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.trim().split('\n');

var N = parseInt(lines.shift());

for(var j=0; j < N; j++){

    var expressao = lines.shift();
    var resultado = "";
    var pilha = [];
    var char;

    for(var i=0; i < expressao.length; i++){
        char = expressao[i];
        switch(char){
            case '*':
            case '/':
            case '+':
            case '-':
            case '^':
                while(!pilha.lenght && (verificaPrioridade(char) <= verificaPrioridade(pilha[pilha.length-1]))){
                    resultado += pilha.pop();
                }         
                pilha.push(char);
                break;
            case '(':
                pilha.push(char);
                break;
                
            case ')':
                while((pilha[pilha.length-1]) !== '(')
                    resultado += pilha.pop();
                
                if((pilha[pilha.length-1]) === '(')
                    pilha.pop();
                break;
                
            default:
                resultado += expressao[i];
                break;
        }
    }

    while(pilha.length){
        if(pilha[pilha.length-1] !== '('){
            resultado += pilha.pop();
        }
        else{
            pilha.pop();
        }
    }
    console.log(resultado)   
}