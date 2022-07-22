var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.trim().split('\n');


while(true){
    var K = parseInt(lines.shift());

    if(K === 0){
        break;
    }

    var MN = lines.shift().split(' ').map(Number);
    var M = MN[0];
    var N = MN[1]

    for(var i=0; i < K; i++){
        var XY = lines.shift().split(' ').map(Number);
        var X = XY[0];
        var Y = XY[1]

        //console.log(X+" "+Y+" "+M+" "+" "+N);

        if(X == M || Y == N){
            console.log("divisa");
        }else{
            if(X > M){
                if(Y > N){
                    console.log("NE");
                }else{
                    console.log("SE");
                }
            }else{
                if(Y > N){
                    console.log("NO");
                }else{
                    console.log("SO");
                }
            }
        }
    }
}