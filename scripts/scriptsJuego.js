//FUNCIONES

function nuevoJuego() {
    if (partidaEnCurso)
        alert("Aun hay una partida en curso, primero debes rendirte");
    else {
        var palabra = arregloPalabras[Math.round(Math.random() * arregloPalabras.length)];
        palabraSeleccionada = palabra;

        alert("La cantidad de letras es: " + palabra.length);

        output.value = "";
        palabraSinLetras = "";

        for (var i = 0; i < palabraSeleccionada.length; i++) {
            palabraSinLetras += "_";
        }

        output.value = palabraSinLetras;
        letrasErroneas.value = "";

        vidas = 5;

        palabraEncontrada = false;
        partidaEnCurso = true;
    }
}

function mostrarLetras(letra) {
    if (partidaEnCurso) {
        if (palabraSeleccionada.includes(letra)) {
            mostrarLetrasCorrectas(letra);
            chequearVictoria();
        }
        else
            mostrarLetrasErroneas(letra);
    }
}

function mostrarLetrasCorrectas(letra) {
    for (var i = 0; i < palabraSeleccionada.length; i++) {
        if (palabraSeleccionada[i] == letra) {
            palabraSinLetras = palabraSinLetras.split("");
            palabraSinLetras[i] = letra;
            palabraSinLetras = palabraSinLetras.join("");
            output.value = palabraSinLetras;
        }
    }
}

function chequearVictoria() {
    if (!palabraSinLetras.includes("_")) {
        alert("GANASTE");
        partidaEnCurso = false;
    }
}

function mostrarLetrasErroneas(letra) {
    if (!letrasErroneas.value.includes(letra)) {
        letrasErroneas.value += letra;
        mostrarDibujo(vidas);
        vidas--;
    }
}

function mostrarDibujo(vidas) {
    switch (vidas) {
        case 5:
            alert("Se dibujó la primer pierna");
            break;
        case 4:
            alert("Se dibujó la otra pierna");
            break;
        case 3:
            alert("Se dibujó el torzo");
            break;
        case 2:
            alert("Se dibujó un brazo");
            break;
        case 1:
            alert("Se dibujó el otro brazo");
            break;
        case 0:
            alert("Se dibujó la cabeza, perdiste");
            alert("La palabra era " + palabraSeleccionada);
            partidaEnCurso = false;
            break;
    }
}

function rendirse() {
    if (partidaEnCurso) {
        alert("Te rendiste, la palabra era " + palabraSeleccionada);
        output.value = "";
        letrasErroneas.value = "";
        partidaEnCurso = false;
    }
}

//VARBIALES Y ONCLICKS

var arregloPalabras = ["messi", "raul", "kaka", "iniesta", "xavi", "benzema", "ronaldinho", "aguero", "tevez", "neymar"];

var palabraSeleccionada;

var palabraSinLetras;

var palabraEncontrada;

var vidas;

var partidaEnCurso = false;

var output = document.getElementById("output");

var letrasErroneas = document.getElementById("letrasErroneas");

var botonNuevoJuego = document.getElementById("nuevoJuego");
botonNuevoJuego.onclick = nuevoJuego;

var botonRendirse = document.getElementById("rendirse");
botonRendirse.onclick = rendirse;

document.addEventListener("keydown", e => {
    mostrarLetras(e.key, partidaEnCurso);
})