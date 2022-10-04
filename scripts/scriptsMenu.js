function mostrarInstrucciones(){
    alert("El juego consiste en adivinar la palabra secreta. Deberás presionar las teclas de tu teclado para ingresar las letras a la palabra. Cada letra erronea que ingreses, irá agregando una porción del dibujo. Tienes en total 5 intentos. ¡MUCHA SUERTE!");
}

var instrucciones=document.getElementById("instrucciones");
instrucciones.onclick=mostrarInstrucciones;