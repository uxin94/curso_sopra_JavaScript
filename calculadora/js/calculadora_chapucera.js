function mostrarNumero(numero) {

    display = document.getElementById("display");
    if (display.value == '0') {
        acum = 0
        numeroAnterior = 0
        display.value = numero
    } else if (acum == 0) {
        display.value += numero
        if(operacion==0) { // si todavia no hemos indicado operacion, el numero anterior sera el de la pantalla
            numeroAnterior = display.value
        }
    } else {
        numeroAnterior = display.value
        display.value  = numero
        acum=0
    }
}

function sumar() {
    numeroAnterior = display.value
    operacion = 1
    acum = 1
}

function restar() {
    numeroAnterior = display.value
    operacion = 2
    acum=1

}

function multiplicar() {
    numeroAnterior = display.value
    operacion = 3
    acum = 1
}

function dividir() {
    numeroAnterior = display.value
    operacion = 4
    acum = 1
}

function reset() {

    numeroAnterior = 0
    display.value = 0
}

function calcular() {

    switch (operacion) {
        case 1:
            display.value = new Number(eval(display.value) + eval(numeroAnterior));
            break;
        case 2:
            display.value = new Number(numeroAnterior - display.value)  //display.value = eval(numeroAnterior)-eval(display.value) ;
            break;
        case 3:
            display.value = new Number(display.value * numeroAnterior);
            break;
        case 4:

            display.value = new Number(eval(numeroAnterior) / eval(display.value));
            break;

    }

    operacion = 0
    acum = 1
}
