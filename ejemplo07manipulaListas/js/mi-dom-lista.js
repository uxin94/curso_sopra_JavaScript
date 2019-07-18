function initialize(){
    var lista=document.getElementById("lista")
    var li2 = document.createElement("li")
    var textLi2 = document.createTextNode("2")
    li2.appendChild(textLi2) // <li>2</li>
    lista.insertBefore(li2, lista.children[1]) //coloco un elemento antes del primer children
    var li4 = document.createElement("li")
    var textLi4 = document.createTextNode("4")
    li4.appendChild(textLi4)
    lista.replaceChild(li4, lista.children[3])
}