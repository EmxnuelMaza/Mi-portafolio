let miNombre = "Emanuel";
let miEdad = 20;
let meGustaProgramar = true;

console.log("Me llamo " + miNombre + " y tengo " + miEdad + " años");
console.log(miEdad + 5);
console.log(miEdad > 18);
let notaExamen = 14;

if (notaExamen >= 17) {
    console.log("Excelente");
} else if (notaExamen >= 11) {
    console.log("Aprobado");
} else {
    console.log("Desaprobado");
}

for (let i = 1; i <= 5; i++) {
    console.log("Practicando JavaScript, intento " + i);
}
function sumar() {
    let a = Number(document.getElementById("num1").value);
    let b = Number(document.getElementById("num2").value);
    document.getElementById("resultado").textContent = "Resultado: " + (a + b);
}

function restar() {
    let a = Number(document.getElementById("num1").value);
    let b = Number(document.getElementById("num2").value);
    document.getElementById("resultado").textContent = "Resultado: " + (a - b);
}

function multiplicar() {
    let a = Number(document.getElementById("num1").value);
    let b = Number(document.getElementById("num2").value);
    document.getElementById("resultado").textContent = "Resultado: " + (a * b);
}

function dividir() {
    let a = Number(document.getElementById("num1").value);
    let b = Number(document.getElementById("num2").value);
    document.getElementById("resultado").textContent = "Resultado: " + (a / b);
}
function saludar() {
    document.getElementById("saludo").textContent = "¡Hola Emanuel, vas muy bien!";
}
let metas = ["Aprender", "Idiomas", "Trabajo", "viajes"];

for (let i = 0; i < metas.length; i++) {
    let nuevoLi = document.createElement("li");
    nuevoLi.textContent = metas[i];
    document.getElementById("listaMetas").appendChild(nuevoLi);
}
function agregarMeta() {
    let texto = document.getElementById("nuevaMeta").value;

    if (texto !== "") {
        let nuevoLi = document.createElement("li");
        nuevoLi.textContent = texto;
        document.getElementById("listaMetas").appendChild(nuevoLi);
        document.getElementById("nuevaMeta").value = "";
    }
}