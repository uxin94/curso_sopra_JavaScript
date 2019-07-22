// Vamos a crear funciones asociadas a una variable a la cual se le asignan los return de cada una.

var miCalculadora = (function(){
    function sumar(n1, n2){
        return n1+n2
    }
    function restar(n1, n2){
        return n1-n2
    }
    function multiplicar(n1, n2){
        return n1*n2
    }
    function dividir(n1, n2){
        return n1/n2
    }

    return{ // el objeto al que se asocia la variable miCalculadora, hay que decir cual es el return en cada caso.
        sumar: sumar, // variable:funcion 
        restar: restar,
        multiplicar: multiplicar,
        dividir: dividir,
    }

})()

console.log(miCalculadora.sumar(8,2))
console.log(miCalculadora.restar(8,2))
console.log(miCalculadora.dividir(8,2))
console.log(miCalculadora.multiplicar(8,2))