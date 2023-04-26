
var qtdPessoas = 45;

var sexo = new Array(qtdPessoas);
var idade = new Array(qtdPessoas);
var opiniao = new Array(qtdPessoas);
var mediaIdade = 0;
var maiorIdade = 0;
var menorIdade = 1000;
var somaIdade = 0;
var qtdePessimo = 0;
var bom = 0
var otimo = 0;
var mulheres = 0
var homens = 0;

for(var i = 0; i<qtdPessoas; i++){
   
    idade[i] = parseInt(prompt("Digite sua idade"));
    sexo[i] = prompt("Digite seu sexo:  F (feminino) ou M (masculino)");
    opiniao[i] = parseInt(prompt("Digite sua opinião sobre o filme: 4 - otimo, 3 - bom, 2 - regular e 1 - pessimo"));
}

for(var i = 0; i< qtdPessoas; i++){

    if(idade[i] != null){
        somaIdade = somaIdade + idade[i];
    }

    if (idade[i] >  maiorIdade){
        maiorIdade = idade[i];
    }
    
    if (idade[i] <  menorIdade){
        menorIdade = idade[i];
    }

    if (opiniao[i] == 1){
        qtdePessimo += 1;
    }

    if (opiniao[i] == 3){
        bom++;
    }

    if (opiniao[i] == 4){
        otimo++;
    }
    
    if(sexo[i] == "m")
        homens++;

    if(sexo[i] == "f")
        mulheres++;
}

mediaIdade = somaIdade / qtdPessoas;


document.write("A media de idade é: " + mediaIdade + "<br>");
document.write("A menor idade é: " + menorIdade + "<br>");
document.write("A maior idade é: " + maiorIdade + "<br>");
document.write("O numero de pessoas que responderam péssimo: " + qtdePessimo + "<br>");
document.write("A porcentagem de pessoas que responderam bom é:  " + ((bom * 100)/qtdPessoas).toFixed(2) + "%" + "<br>");
document.write("A porcentagem de pessoas que responderam otimo é: " + ((otimo * 100)/qtdPessoas).toFixed(2) + "%" + "<br>");
document.write("A quantidade de mulheres que responderam é de: " + mulheres + "<br>");
document.write("A quantidade de Homens que responderam é de: " + homens+ "<br>");