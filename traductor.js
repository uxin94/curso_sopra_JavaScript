var Traductor = (function(){
    
    const EN = {
        'hola':'hello',
        'adios':'bye'
    }

    const VAL = {
        'hola':'hola',
        'adios':'adeu'
    }

    const EUS = {
        'hola':'kaixo',
        'adios':'agur'
    }

    const IDIOMAS = {
        EN: EN,
        VAL: VAL,
        EUS: EUS,
    }

    function traducir(palabra, idioma){
        
        // if (idioma.toUpperCase()=='EN'){
        //     return EN[palabra]
        // } else if (idioma.toUpperCase()=='VAL'){
        //     return VAL[palabra]
        // } else if (idioma.toUpperCase()=='EUS'){
        //     return EUS[palabra]
        // }

        switch(idioma.toUpperCase()){            
            case 'EN':
                return EN[palabra]
                break;
            case 'VAL':
                return VAL[palabra]
                break;
            case 'EUS':
                return EUS[palabra]
                break;
            default: 'No tenemos traducciones para ese idioma';
                break;
        }
        
        // Forma mas simple:
        // return IDIOMAS[idioma.toUpperCase()][palabra]

       
    }
       
    return{
        traducir:traducir
    }

})()

console.log(Traductor.traducir('hola','EN'))
console.log(Traductor.traducir('hola','eus'))
console.log(Traductor.traducir('adios','VAL'))
console.log(Traductor.traducir('adios','d'))