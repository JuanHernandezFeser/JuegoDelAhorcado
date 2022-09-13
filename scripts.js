//FUNCIONES

function nuevoJuego() {
    var palabra = arregloPalabras[Math.round(Math.random() * 9)];
    palabraSeleccionada=palabra;
    alert("La cantidad de letras es: "+palabra.length)
    console.log(palabra);
    output.value="";
    letrasErroneas.value="";
}

function rendirse(){
    alert("Te rendiste, la palabra era "+palabraSeleccionada);
}

function mostrarLetras(letra){
    if(palabraSeleccionada.includes(letra))
        output.value+=letra;
    else
        letrasErroneas.value+=letra;
}

//VARBIALES Y ONCLICKS

var arregloPalabras = ["messi", "raul", "kaka", "iniesta", "xavi", "benzema","fernandinho","aguero","tevez","neymar"];

var palabraSeleccionada;

var output=document.getElementById("output");

var letrasErroneas=document.getElementById("letrasErroneas");

var botonNuevoJuego=document.getElementById("nuevoJuego");
botonNuevoJuego.onclick=nuevoJuego;

var botonRendirse=document.getElementById("rendirse");
botonRendirse.onclick=rendirse;

document.addEventListener("keydown",e=>{
    mostrarLetras(e.key);
})