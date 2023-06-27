//soma
/*function somar(n1 = 0,n2= 0) {
    return n1 + n2
}
console.log(somar(2,3))*/

//Multiplicalção
/*
function multiplicação(n1 = 0, n2 = 0) {
    return n1 * n2
}
console.log(multiplicação(5,1))*/

//Divisão

function divisao(n1 = 0, n2 = 0) {
    return n1 / n2;
}

var resultado = divisao(4,2);

if (isFinite(resultado)) {//isFinite como o próprio nome diz, é quando um valor é finito, e não infinito!
    console.log(resultado);
} else {//Como no 'if' coloquei se o número for finito... / logo o else será para o 'Infinito'!
    console.log('O valor fica infinito!');
}
