console.log("-------------------------------------------------")
console.log("-------------------Ejercicio 1--------------------")
console.log("-------------------------------------------------")

// Sumatorio de todos los atributos que lleguen, minimo 2

function sumatorio(numero1, numero2){

    if(arguments.length>=2){ // quiero al menos dos elementos
        let resultado = 0;
        for (let index = 0; index < arguments.length; index++) {
            resultado += arguments[index]
        }
    
    return resultado
    }
}


// Agregar a un array la funcion construida 

Array.prototype.funcionQueSuma = sumatorio; // Al objeto general array le asigno la funcion
var miArray = new Array(7,21,3)
console.log(miArray.funcionQueSuma(3,2,2,2))
var otroArray= [1,1,1,1,1,1,1]
console.log(otroArray.funcionQueSuma(3,2,2,2))

// Agregar una funcion al array que concatene su contenido

function concatenarContenidoDeArray(){

    let concatenacion = ""
    for (let index = 0; index < this.length; index++) {   //this es el array, this.length sera su tamaño
        concatenacion += this[index];
    }
    return concatenacion
}

Array.prototype.concatena = concatenarContenidoDeArray
console.log(miArray.concatena())
console.log(otroArray.concatena())