// função normal:

function name(params) {
    //bloco de instruções a serem executadas
}
//Arrow function

const soma = (num1, num2) => num1 + num2;

// Arrow function mais de uma linha

const somaNumerosPequenos = (num1,num2) => {
    if (num1 >10 || num2 > 10) {
        return 'Somente numeros de 1 a 9.'
    }else{
        return num1 + num2;
    }
}

console.log(somaNumerosPequenos(1,13));