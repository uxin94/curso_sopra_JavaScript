function mostrarNumero(numero){

    display = document.getElementById("display");
    if (display.value =='0'){
        numeroAnterior=0
        display.value=numero
    } else {
        numeroAnterior = display.value
        display.value += numero
        
    }
    //display.value = new Number(display.value + numero)
}

function sumar(){
    display.value = eval(display.value)+eval(numeroAnterior);
}

function restar(){
    display.value = eval(display.value)-eval(numeroAnterior);
}

function multiplicar(numero){
    display.value = eval(display.value)*eval(numeroAnterior);
}

function dividir(numero){
    display.value = eval(display.value)/eval(numeroAnterior);
}

function reset(){

    numeroAnterior=0
    display.value=0
}