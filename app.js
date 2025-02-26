// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
/* Inicia declarando una variable de tipo array, que almacenará los nombres de los amigos ingresados. */
let amigos = [];
let ingreseAmigo = document.getElementById("amigo");
let listAmigos = document.getElementById("listaAmigos");
let resultadoFinal = document.getElementById("resultado");

function addAmigo() {
    if (!ingreseAmigo.value) {
        alert("Debes ingresar un nombre.");
    } else {
        amigos.push(ingreseAmigo.value);
        listAmigos.innerHTML += `<>${ingreseAmigo}</h1>`;
        limpiarCaja();
    }
    console.log(amigos);
}

function sorteoAmigo() {
    if (amigos.length === 0) {
        alert("Debes ingresar al menos un nombre antes de sortear.");
        return;
    }
    
    let random = Math.floor(Math.random() * amigos.length);
    let amigoSecreto = amigos[random];
    resultadoFinal.innerHTML = `<h2>Tu amigo secreto es: ${amigoSecreto}</h2>`;

}

function limpiarCaja() {
    function limpiarCaja(){ ingreseAmigo.value=""};
}