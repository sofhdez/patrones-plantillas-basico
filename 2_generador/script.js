// ✏️ Cámbiame: esta es la lista de mensajes.
// Puedes cambiarlos o agregar más (cada uno entre comillas y separado por coma).
const cumplidos = [
    "¡Eres increíble! 🌟",
    "Tienes una sonrisa que contagia 😄",
    "Hoy vas a lograr cosas geniales 💪",
    "Eres más valiente de lo que crees 🦁",
    "El mundo es mejor contigo 💖",
    "Tus ideas son geniales 💡",
    "Eres una gran amiga 🤗",
    "Puedes con esto y con mucho más ✨",
    "Tu creatividad no tiene límites 🎨",
    "Hoy es tu día 🌈"
];

// Encontramos los elementos que vamos a usar
const boton = document.getElementById("boton");
const mensaje = document.getElementById("mensaje");
const cuenta = document.getElementById("cuenta");

// Una variable para ir contando los clics
let total = 0;

// Cuando alguien hace clic en el botón...
boton.addEventListener("click", function () {
    // Elegimos un número al azar de la lista
    const azar = Math.floor(Math.random() * cumplidos.length);
    // Mostramos el cumplido que cayó
    mensaje.textContent = cumplidos[azar];
    // Sumamos uno al contador y lo mostramos
    total = total + 1;
    cuenta.textContent = total;
});