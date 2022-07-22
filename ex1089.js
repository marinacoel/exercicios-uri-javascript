var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

while(true){
    var N = parseInt(lines.shift());

    if(N===0){
        break;
    }
    
    var H = (lines.shift().split(' ')).map(Number);
    H.push(H[0]);
    H.push(H[1]);

    var picos = 0;

    for(var i=1; i < N+1;i++){

        if(H[i] < H[i-1] && H[i] < H[i+1] ||
           H[i] > H[i-1] && H[i] > H[i+1]){

            picos++;
        }
    }

    console.log(picos);
}