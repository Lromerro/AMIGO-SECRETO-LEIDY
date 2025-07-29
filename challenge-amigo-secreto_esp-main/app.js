// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
const amigos = [];

function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();

    if (nombre === "") {
        alert("Por favor, escribe un nombre.");
        return;
    }

    if (amigos.includes(nombre)) {
        alert("Ese nombre ya fue agregado.");
        return;
    }

    amigos.push(nombre);
    mostrarLista();
    input.value = "";
}

function mostrarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    amigos.forEach((nombre) => {
        const li = document.createElement("li");
        li.textContent = nombre;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Debe haber al menos 2 amigos para sortear.");
        return;
    }

    const sorteados = [...amigos];
    mezclarArray(sorteados);

    const resultado = {};

    for (let i = 0; i < amigos.length; i++) {
        // Evitar que una persona se toque a sí misma
        if (amigos[i] === sorteados[i]) {
            sortearAmigo(); // rehacer el sorteo
            return;
        }
        resultado[amigos[i]] = sorteados[i];
    }

    mostrarResultado(resultado);
}

function mezclarArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function mostrarResultado(resultado) {
    const listaResultado = document.getElementById("resultado");
    listaResultado.innerHTML = "<h3>Resultado del sorteo:</h3>";

    for (const [amigo, amigoSecreto] of Object.entries(resultado)) {
        const li = document.createElement("li");
        li.textContent = `${amigo} → ${amigoSecreto}`;
        listaResultado.appendChild(li);
    }
}
