fizzBuzz(2)
fizzBuzz(9)
fizzBuzz(10)
fizzBuzz(15)

let numero = prompt('Introduce un número: ') //Solo funciona en el navegador

function fizzBuzz(numero){

    if(numero%3 ==0 && numero%5==0){
        console.log("Fizz-Buzz " + numero)
    } else if(numero%3 == 0){
        console.log("Fizz "+ numero)
    }else if(numero%5 == 0){
        console.log("Buzz "+ numero)
    } else{
        console.log(numero)
    }
}