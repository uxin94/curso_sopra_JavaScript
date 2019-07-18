console.log("Mi primer log en nodejs")
variableGlobal = "mi variable global declarada"
var otraVariableGlobal = "Otra variable mas"

laFuncionDeIrAlLet()

function laFuncionDeIrAlVar(){

    var variableLocal = "soy una variable local"
    for (var i = 0; i<10; i++){
        console.log("contenido de i: " + i)
    }
    // i todavia existe fuera del for (var)
    console.log("valor de i al final: "+i)

}

function laFuncionDeIrAlLet(){

    var otraVariableLocal = "soy otra variable local"
    variableDeMierda = "variable global de mierda"
    // al usar let, i solamente existe dentro del for
    for (let i = 0; i<10; i++){
        console.log("contenido de i: " + i)
    }

    // por lo que esta instruccion daria error
    //console.log("valor de i al final: "+i)

}

laFuncionDeIrAlVar()

console.log("-------------------------------------------------")
console.log("---------Evaluacion de los tipos de datos--------")
console.log("-------------------------------------------------")
var tipoDeDatoNumerico = 8
var tipoDeDatoString ="Cadena"
var tipoDeDatoFecha = new Date()
var referenciaAUnaFecha= tipoDeDatoFecha // al ser una referencia los cambios en uno afectan igualmente al otro

console.log("Fecha original: "+tipoDeDatoFecha)
cambiarFecha(tipoDeDatoFecha)
console.log("Fecha original cambiada: "+tipoDeDatoFecha)
console.log("Fecha de la referencia: "+referenciaAUnaFecha)

function cambiarFecha(fecha){

    fecha.setFullYear(1994)
    console.log("Fecha cambiada a " +fecha)
}

console.log("Dime el tipo de la variable con un numero: "+typeof tipoDeDatoNumerico)
console.log("Dime el tipo de la variable con una fecha: " + typeof tipoDeDatoFecha)
console.log("Dime el tipo de la variable con un string: "+typeof tipoDeDatoString)

operacionesNumericas(1,3,5,7) // lo ejecuta aunque le pase atributos a pesar de que no los necesita, los ignora
operacionesNumericas()
function operacionesNumericas(){
    let miNumero = new Number(2.141592654)
    console.log("Valor almacenado "+miNumero.valueOf())
    console.log("Valor almacenado "+miNumero.toFixed()) // valor entero     
    console.log("Valor almacenado "+miNumero.toFixed(4))  // valor entero con 4 decimales  
}

console.log("-------------------------------------------------")
console.log("-----------Parametros en las funciones-----------")
console.log("-------------------------------------------------")
funcionChachiPistachi()
funcionChachiPistachi(1)
funcionChachiPistachi("chachi", "pistachi")
funcionChachiPistachi(1,2,3,4,56,6,56,4,12)
function funcionChachiPistachi(chachi, pistachi){
    console.log("Numero de parametros recibidos: " +arguments.length) // arguments: elementos que le llegan a la funcion
    console.log("Numero de parametros esperados: " +arguments.callee.length)
    if(arguments.length==arguments.callee.length){
        console.log(chachi+ " " + pistachi);
    }

    if(arguments.length==1){
        console.log("Con "+chachi+" me conformo")
    }
    console.log("-")
}

console.log("-------------------------------------------------")
console.log("---------------------Arrays----------------------")
console.log("-------------------------------------------------")

comoMeGustanLosArrays()

function comoMeGustanLosArrays(){

    let unArray = new Array(); // o []
    let otroArray = [0, "valor", new Date()];
    unArray[0]=7;
    unArray[1]="Cosa"
    console.log("El ultimo elemento del array es: " + unArray[unArray.length-1])
    console.log("El otro array contiene: " +otroArray)
    let miArrayAsociativo = new Array()
    miArrayAsociativo["clave"]="valor"
    console.log("miArrayAsociativo.clave = "+miArrayAsociativo.clave)
    let persona = new Array()
    persona.nombre = "Andrea"
    persona.apellido1 = "Albizuri"
    persona.funcioncilla = funcionChachiPistachi
    persona.funcioncilla("molo", "mazo")

}

console.log("-------------------------------------------------")
console.log("---------------------Clases----------------------")
console.log("-------------------------------------------------")

function Cubata(hielos, licor){

    this.losHielos = hielos
    this.elLicor=licor
    //Declarando esta funcion aqui, se crea una nueva por cada objeto, maaal: sumidero de memoria!
    // this.echarUnTrago=function(){ 
    //     return this.losHielos + ", " + this.elLicor
    // }

}

Cubata.prototype.generameUnString = function(){ // Asigno una funcion al objeto

    return this.losHielos + ", " + this.elLicor
}
var miCubata = new Cubata("Dos hielos", "Ron") // Creo el objeto
console.log(miCubata.generameUnString())

let hombreObjeto = {} // estructura compleja
let cartaDeCubatas=[
    {
        hielos: 2,
        licor: "Ron"
    },{
        hielos: 5,
        licor: "Ginebra"
    },{
        hielos:0,
        licor: "cerveza"
    }
]

console.log(cartaDeCubatas[2].licor)