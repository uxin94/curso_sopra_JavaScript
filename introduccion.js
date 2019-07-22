
// VIDEOS:
// Repaso JS: https://www.youtube.com/watch?v=p59kAq_TB7w&t=6534s
// Asíncronía: https://www.youtube.com/watch?v=DjTuztU2G1U&t=6960s
// App peliculas JS puro: https://www.youtube.com/watch?v=A7FfQvh7IUc&t=4s

// --------------------------------------
// --------- Tipos de variables ---------
// --------------------------------------

var a = 1 
let b = 2 // solo tiene valor durante el bloque (por ej un bucle) donde se ejecuta
const c = 5 // no se le puede cambiar el valor

if(true){
    var a = 3
    let b = 4
    console.log(a)
    console.log(b)
}

console.log(a) // Se ha cambiado el valor a 3 y se mantiene
console.log(b) // Se ha cambiado el valor a 4 pero solo en el if, por tanto aqui se mostrara el valor inicial, 2

//$variable

// ------------------------------------
// ------------ Iteradores ------------
// ------------------------------------

let colores = ['rojo', 'amarillo', 'verde', 'azul']
for (var i =0; i<colores.length; i++){
    console.log(i, colores[i])
}

// for in: guarda la posicion de cada elemento del array
for (let i in colores){ 
    console.log(i, colores[i])
}

//for of: obtiene directamente el elemento de cada posicion
for (let color of colores){  
    console.log(color)
}

//forEach
function muestraColor(color, pos){
    console.log(pos, color)
}

colores.forEach(muestraColor)
colores.forEach(function(color, pos){ // se puede crear la funcion directamente ahi, ya no necesitaria nombre (funcion anonima)
    console.log(pos, color)
})

// ------------------------------------
// --------- Funciones flecha ---------
// ------------------------------------

// parametros => {cuerpo de la funcion}
colores.forEach((color, pos) => { 
    console.log(pos, color)
})

colores.forEach(color => {  // si solo se le pasa un parametro puede ir sin parentesis
    console.log(color)
})

colores.forEach(() => console.log('Hay un color')) // Si solo es una linea no hace falta poner las {} ni el return

let suma = (n1, n2)=>n1+n2;
let suma1 = (n1,n2)=>{ return n1+n2} // estas dos funciones hacen exactamente lo mismo

// ------------------------------------
// ------- Funciones recursivas -------
// ------------------------------------

// Se llaman a si mismas para evitar bucles

function factorial(numero){
    if(numero === 1){
        return 1;
    } else {
        return numero * factorial(numero-1)
    }
}

let f5 = factorial(5)
console.log(f5)

// --------------------------
// --------- Arrays ---------
// --------------------------

let mascotas = ['pez', 'gato', 'perro', 'tortuga']
console.log('Array original: ' ,mascotas)

//Añade elemento al final del array
mascotas.push('periquito') 
console.log('Array con elemento añadido al final: ',mascotas)

//Saca el ultimo elemento del array
let ultimaMascota = mascotas.pop() 
console.log('Ultimo elemento del array: ',ultimaMascota)
console.log('Array sin el ultimo elemento: ',mascotas)

//Saca el primer elemento del array
let primeraMascota = mascotas.shift() 
console.log('Primer elemento del array: ',primeraMascota)
console.log('Array sin el primer elemento: ',mascotas)

//Añadir nuevo elemento al principio del array
mascotas.unshift(ultimaMascota) 
console.log('Array con ultimo elemento añadido al principio: ',mascotas)

//Elimino los elementos 1 y 2 y meto en su lugar primeraMascota (se empieza a contar por 0!!)
let mascotasDelMedio = mascotas.splice(1,2,primeraMascota) //devuelve los elementos eliminados
console.log('Array con elementos 1 y 2 eliminados e insertado otro en su lugar:', mascotas)
console.log('Elementos eliminados del array: ',mascotasDelMedio)

console.log('Nuevo array original:', mascotas)
let copiaMascotas = mascotas; //no crea una copia, apunta a la referencia
copiaMascotas.push('camaleon') // por tanto si añado una mascota mas, se añade tambien a mascotas
console.log('Copia del array con elemento añadido al final: ',copiaMascotas)
console.log('Array copiado: ',mascotas, '(se ha modificado porque apunta a referencia, no crea otro objeto!)')
//Para evitar eso concatenamos el array a uno vacio...
let copiaMascotas1 = [].concat(mascotas);
copiaMascotas1.push('serpiente')
console.log('Otra copia del array con elemento añadido al final:',copiaMascotas1)
console.log('Array copiado: ',mascotas)
//...o creamos un array del array.
let copiaMascotas2 = [...mascotas];
ultimaMascota=mascotas.pop()
console.log('Copia del array con ultimo elemento eliminado:', copiaMascotas2)
console.log('Array copiado;',mascotas)

let [periquito, p, ..._] = copiaMascotas2 // se añade al final ..._ o ...restoDeElementosOComoQueramosLLamarle
console.log('Resto de elementos que no hemos copiado: ', _)

// ---------------------------
// --------- Objetos ---------
// ---------------------------

let libro = {
    titulo: 'La torre oscura',
    paginas: 684,
    sinopsis: 'Sinopsis del libro'
}

console.log(libro.titulo)
console.log(libro['titulo'])

//Desestructuracion de arrays y objetos
let titulo = libro.titulo
let sinopsis = libro.sinopsis
let paginas = libro.paginas
// (otra manera de declarar el objeto)
//let{titulo, sinopsis, paginas} = libro

let libro2 = Object.assign({}, libro, {paginas:714}) // Crea el objeto y le añade lo del otro libro y le sobreescribe el numero de paginas
console.log('Libro: ', libro)
console.log('Nuevo libro: ', libro2)
// o
// {
//     titulo: 'Los lobos del Calla';
//     paginas: 714;
//     sinopsis: 'Sinopsis del libro 2';
// }
let libro3 ={...libro, sinopsis: 'Otra sinopsis'} // nuevo libro a partir del primero y cambiando la sinopsis
libro.paginas=597  // cambiamos las paginas del primer libro
console.log('Libro: ', libro) // el primer libro tiene diferentes paginas
console.log('Otro nuevo libro: ', libro3) 

// Interpolacion de strings
console.log('Titulo: '+titulo+', sinopsis: '+sinopsis+', paginas: ' + paginas);
console.log(`Titulo: ${titulo}
Sinopsis: ${sinopsis} 
Paginas: ${paginas}`);


// ------------------------------------------------
// ----- Funciones constructoras y Prototyope -----
// ------------------------------------------------

function Libro(titulo, sinopsis, paginas, publicacion){
    this.titulo = titulo
    this.sinopsis = sinopsis
    this.paginas = paginas
    this.publicacion = publicacion
    //this.yaALaVenta=function(){
    //     return new Date().getFullYear() >= this.publicacion
    // }
}

// Lo de la fecha esta mu bien pero cada vez que se crea un objeto se crea la funcion, y eso es absurdo.
// Asi que vamos a asignarle al objeto Libro esa funcion

Libro.prototype.yaALaVenta=function(){
        return new Date().getFullYear() >= this.publicacion
     }

let libro100 = new Libro('Libro 100', 'Una sinopsis', 100, 2019)
let libro101 = new Libro('Libro 102', 'Otra sinopsis', 101, 2020)
console.log(libro100)
console.log(libro100.yaALaVenta())
console.log(libro101)
console.log(libro101.yaALaVenta())

// Funcion al objeto String que repite x veces un String.
String.prototype.repeat=function (numeroDeVeces){
    
    //return new Array(numeroDeVeces+1).join(this); // creo un array vacio y lo uno con la string que quiero unir
    // [array].join(cosa), une una cadena con la cosa array1cosaarray2 etc
    repeticion=this;
    for (let index = 0; index < numeroDeVeces-1; index++) {   
        repeticion += this;
    }

    return repeticion
}

let txt = 'blabla'.repeat(3)
console.log(txt)
console.log('blabla'.repeat(2))

// ------------------
// ----- Clases -----
// ------------------

class Serie{
    constructor(titulo, episodios, descripcion, episodiosVistos=0){
        this.titulo = titulo
        this.episodios = episodios
        this.descripcion = descripcion
        this.episodiosVistos = episodiosVistos
    }

    episodiosPorVer(){
        return this.episodios-this.episodiosVistos;
    }
}

let st = new Serie('Stranger Things', 27, 'Cosas extrañas', 27)
let sfu = new Serie('Six feet under', 65, 'Funeraria', 41)
let got = new Serie('Game Of Thrones', 52, 'Drakharis', 39)
let ps = new Serie ('Paquita Salas', 17, 'Caos español', 17)
console.log('Episodios por ver: ',sfu.episodiosPorVer())

// -----------------------------
// ----- Map/Filter/Reduce -----
// -----------------------------

// Map: realiza cualquier cosa en cada elemento de un array y devuelve el resultado para cada uno.
const nums = [2, 4, 5, 5, 9, 10]
const tripleNums = nums.map((n) =>n*3) // o =>{return n*3}
console.log(tripleNums);

// Filter: devuelve un nuevo array con los elementos que cumplen una condicion o loksea.
const numsPares = tripleNums.filter(n => n%2==0)
console.log(numsPares)

//Reduce: reduce a un solo valor un array
const sumaNumsPares = numsPares.reduce((acc, n)=>{return acc+=n}, 0) // ese 0 es el valor inicial del acumulador, para que no pete
console.log(sumaNumsPares)

// Funcion que muestra el titulo de las series que se han visto por completo
const series = [st, sfu, got, ps]
function seriesVistas(misSeries){

    seriesFiltradas = misSeries.filter((s)=>{return (s.episodiosPorVer()===0)})
    tituloDeLasSeriesFiltradas = seriesFiltradas.map((t)=> t.titulo)
    return tituloDeLasSeriesFiltradas
}
console.log('Series vistas: ', seriesVistas(series))

// Forma "directa"
const seriesQueHeVisto = series.filter((s)=>{return (s.episodiosPorVer()===0)}).map((t)=> t.titulo) //{return (s.episodios==s.episodiosVistos)}).map((t)=> t.titulo)  
console.log('Series vistas: ', seriesQueHeVisto)

// --------------------
// ----- Promesas -----
// --------------------

console.log(1)
setTimeout(()=>{console.log(2)}, 100) // muestra en 100 ms, si ponemos 0 ms sera lo ultimo que se ejecute, entonces el resultado sera igualmente 132
console.log(3)

function getGenerosDeLasSeries(){

    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://ejemplos-dc1c1.firebaseio.com/generos')
    xhr.addEventListener('readystatechange',()=>{
        console.log(xhr.status)
        if(xhr.status === 200 && xhr.readyState===4){
            let resp = xhr.responseText
            console.log(resp)

        }
    })

    xhr.send();
}