// variables
let insercion = ""
let divContenedor = document.getElementById("result-content");
// Funcion encriptadora
function encrypt() {
    let mensaje = document.getElementById("datos").value;
    const conversion = {
        a: "ai",
        e: "enter",
        i: "imes",
        o: "ober",
        u: "ufat"
    };
    let contenido = mensaje.split("").map((letra) => conversion[letra] || letra).join("");
    mostrar(contenido);
}

// Funcion desencriptar
function decrypt() {
    let mensaje = document.getElementById("datos").value;
    const conversionInversa = {
        ai: "a",
        enter: "e",
        imes: "i",
        ober: "o",
        ufat: "u"
    };
    let contenido = mensaje.match(/(?:ai|enter|imes|ober|ufat)|[^aeiou]/g).map((grupo) => conversionInversa[grupo] || grupo).join("");
    mostrar(contenido);
}
// Funcion de muestra de encriptacion
function mostrar(contenido) {
    let div = document.getElementById("pre-ejecucion");
    document.querySelector("#text-cifrado").textContent=contenido;
    document.querySelectorAll(".no-show").forEach(element=>{   element.classList.remove("no-show")});
    if (div) {
        // Elimina el elemento del DOM
        // div.classList.add("no-show");
        div.remove()
    } else {
        console.log("El elemento no existe");
    }
}
//Funcion de copiar texto
function copyText() {
    var textoCifrado = document.getElementById("text-cifrado").innerText;

    navigator.clipboard.writeText(textoCifrado)
        .then(function() {
            console.log('Texto copiado al portapapeles');
        })
        .catch(function(error) {
            console.error('Error al copiar texto: ', error);
        });
}
