function agregarPalabra() {
    if (input.value == "")
        alert("No se ha ingresado ninguna palabra nueva");
    else
        alert("La palabra " + input.value + " se ha ingresado correctamente");
}

var input = document.getElementById("input");

var agregar = document.getElementById("agregar");
agregar.onclick = agregarPalabra;