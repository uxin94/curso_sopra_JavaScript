function initialize(){
    var parrafo1 = document.getElementById("parrafo1")
    console.log(parrafo1)
    var parrafo2 = document.querySelector("body p")
    console.log(parrafo2)
    var parrafos = document.getElementsByClassName("titulo")
    console.log(parrafos)
    var vasListo = document.getElementsByTagName("li");
    console.log(vasListo)
    var inputs = document.getElementsByName("input")
    console.log(inputs)
    var parrafosDeVerdad = document.querySelectorAll("body p")
    console.log("Primer elemento: ", parrafosDeVerdad.item(0))
    console.log("Segundo :", parrafosDeVerdad[1])
    for (let index = 0; index < parrafosDeVerdad.length; index++) {
        console.log(parrafosDeVerdad[index].firstChild.textContent)
        
    }    
}