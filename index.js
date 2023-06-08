var btn_Encriptar = document.querySelector(".btn_encriptar");
var btn_Desencriptar = document.querySelector(".btn_desencriptar");
var munheco = document.querySelector(".contenedor_munheco");
var contenedor = document.querySelector(".contenedor_parrafo");
var resultado = document.querySelector(".resultado");

btn_Encriptar.onclick = encriptar;
btn_Desencriptar.onclick = desencriptar;

function encriptar(){
    ocultarAdelante();
    var cajatexto = recuperarTexto()
    resultado.textContent = encriptarTexto(cajatexto);
}

function desencriptar(){
    ocultarAdelante();
    var cajatexto = recuperarTexto()
    resultado.textContent = desencriptarTexto(cajatexto);
}

function recuperarTexto(){
    var cajatexto = document.querySelector(".caja_texto")
    return cajatexto.value
}

function ocultarAdelante(){
    munheco.classList.add("ocultar");
    contenedor.classList.add("ocultar");
}

function encriptarTexto(mensaje) {
    const sustituciones = {
        a: "ai",
        e: "enter",
        i: "imes",
        o: "ober",
        u: "ufat"
    };

    mensaje = mensaje.replace(/a|e|i|o|u/g, function (match) {
        return sustituciones[match];
    });
    return mensaje;

}

function desencriptarTexto(mensaje) {
    const sustituciones = {
        ai: "a",
        enter: "e",
        imes: "i",
        ober: "o",
        ufat: "u"
    };
    
    mensaje = mensaje.replace(/ai|enter|imes|ober|ufat/g, function (match) {
        return sustituciones[match];
    });

    return mensaje;
}

const btn_copiar = document.querySelector(".btn_copiar"); 
    btn_copiar.addEventListener("click", copiar = () => {
    var contenido = document.querySelector(".resultado").textContent;
    navigator.clipboard.writeText(contenido);
    console.log("hola"); 
});