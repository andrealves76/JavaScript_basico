
// DECLARAÇÃO DE FUNÇÃO

function imprimeTexto(texto) {
    console.log(texto);  
}
imprimeTexto('Olá!');
imprimeTexto('Novo texto');


function soma() {
    // pode se colocar varios códigos antes do "return"
    return 2+3;
    // tudo que for colocado após o "return" NÃO será executado.
}
console.log(soma()); // console.log + função

imprimeTexto(soma()); // vai subistituir o valor dentro da função "imprimeTexto" pelo valor da função "soma"

//console.log(Math.random(0,10));   