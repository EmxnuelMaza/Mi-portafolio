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