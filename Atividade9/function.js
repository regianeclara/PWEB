
var numeros = [];

for(var i = 0; i<3; i++){
    numeros[i] = prompt("Digite um número");
    
}
MaiorNum(numeros);
OrdemCresc();

function MaiorNum(a){
    return alert("O maior número é: " + Math.max(...a));
}
function OrdemCresc(a, b){
    return alert("Os números em ordem crescente são: " + numeros.sort((a, b) => a - b));
}    


