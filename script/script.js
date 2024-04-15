/*
e --> enter
o --> ober
i --> imes
a --> ai
u --> ufat
amarillo --> aimairillo
amairillo --> aimesmaimesrimesllo
aimesmaimesrimesllo --> aimesmaimesrimesllober
aimesmaimesrimesllober =! aimairimesllober
*/
const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");

function encriptarTexto(){
    const textoEncriptado = encriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
}

function desencriptarTexto(){
    const desencriptado = desencriptar(textArea.value);
    mensaje.value = desencriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
}


function encriptar(stringEncriptado) {
    // Realizamos los reemplazos necesarios utilizando el método replace() y expresiones regulares
    stringEncriptado = stringEncriptado.replace(/e/gi, "enter");
    stringEncriptado = stringEncriptado.replace(/o/gi, "ober");
    stringEncriptado = stringEncriptado.replace(/i/gi, "imes");
    stringEncriptado = stringEncriptado.replace(/a/gi, "ai");
    stringEncriptado = stringEncriptado.replace(/u/gi, "ufat");

    return stringEncriptado;

}

function desencriptar(stringEncriptado) {
    // Realizamos los reemplazos necesarios utilizando el método replace() y expresiones regulares
    stringEncriptado = stringEncriptado.replace(/enter/gi, "e");
    stringEncriptado = stringEncriptado.replace(/ober/gi, "o");
    stringEncriptado = stringEncriptado.replace(/imes/gi, "i");
    stringEncriptado = stringEncriptado.replace(/ai/gi, "a");
    stringEncriptado = stringEncriptado.replace(/ufat/gi, "u");

    return stringEncriptado;

}

function copiar(){
    var contenido = document.querySelector(".mensaje");
    contenido.select();
    document.execCommand("cut")
    alert("SE COPIO!");
}

