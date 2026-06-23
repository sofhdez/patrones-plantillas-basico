// ===========================================================
//   JAVASCRIPT DE MI FAN-PAGE  ·  VERSIÓN EJEMPLO
//   El JavaScript hace que la página REACCIONE cuando la tocas.
//   Aquí hay 5 acciones distintas:
//     1) Botón de dato curioso al azar
//     2) Modo claro / oscuro
//     3) Botón de "me gusta" con contador
//     4) Botones que cambian el color del tema
//     5) Formulario que agrega comentarios a la lista
// ===========================================================


// ----------  1) DATO CURIOSO AL AZAR  ----------

// Esta es la lista de datos. Cada uno va entre comillas y separado por coma.
const datos = [
  "En 1971, más de 100 mil personas llenaron el Estadio Azteca para ver un partido de fútbol femenil. 🏟️",
  "El apodo del equipo es 'El Tri Femenil', por los tres colores de la bandera. 🇲🇽",
  "Mónica Ocampo anotó uno de los goles más bonitos del Mundial 2011. 👟",
  "Charlyn Corral fue goleadora de la liga española y ganó el trofeo Pichichi. 🥇",
  "Kenti Robles fue de las primeras mexicanas en jugar con el Real Madrid Femenil. ⚽",
  "El fútbol femenil inspira a miles de niñas a soñar dentro de la cancha. 💚"
];

const botonDato = document.getElementById("boton-dato");
const dato = document.getElementById("dato");

// Cuando alguien hace clic en el botón...
botonDato.addEventListener("click", function () {
  // Elegimos un número al azar entre 0 y la cantidad de datos.
  const azar = Math.floor(Math.random() * datos.length);
  // Mostramos en la página el dato que salió.
  dato.textContent = datos[azar];
});


// ----------  2) MODO CLARO / OSCURO  ----------

const botonTema = document.getElementById("boton-tema");

botonTema.addEventListener("click", function () {
  // Le ponemos (o le quitamos) la clase "oscuro" al body.
  // El CSS se encarga de cambiar los colores.
  document.body.classList.toggle("oscuro");

  // Cambiamos el emoji del botón según el modo.
  if (document.body.classList.contains("oscuro")) {
    botonTema.textContent = "☀️";
  } else {
    botonTema.textContent = "🌙";
  }
});


// ----------  3) BOTÓN DE "ME GUSTA"  ----------

const botonLike = document.getElementById("boton-like");
const likes = document.getElementById("likes");

// Una variable para ir contando los "me gusta".
let totalLikes = 0;

botonLike.addEventListener("click", function () {
  totalLikes = totalLikes + 1;   // sumamos uno
  likes.textContent = totalLikes; // lo mostramos en la página
});


// ----------  4) CAMBIAR EL COLOR DEL TEMA  ----------

// Buscamos TODOS los botones de color a la vez.
const botonesColor = document.querySelectorAll(".color-btn");

// A cada botón le ponemos su propia acción.
botonesColor.forEach(function (boton) {
  boton.addEventListener("click", function () {
    // Leemos el color guardado en el atributo data-color del botón.
    const nuevoColor = boton.getAttribute("data-color");
    // Cambiamos la variable --color de toda la página.
    document.documentElement.style.setProperty("--color", nuevoColor);
  });
});


// ----------  5) FORMULARIO DE COMENTARIOS  ----------

const form = document.getElementById("form-comentario");
const campoNombre = document.getElementById("nombre");
const campoMensaje = document.getElementById("mensaje");
const lista = document.getElementById("lista-comentarios");

// Cuando se envía el formulario...
form.addEventListener("submit", function (evento) {
  // Evitamos que la página se recargue (comportamiento normal del form).
  evento.preventDefault();

  // Leemos lo que escribió la persona.
  const nombre = campoNombre.value;
  const mensaje = campoMensaje.value;

  // Creamos un nuevo bloque de comentario.
  const nuevo = document.createElement("div");
  nuevo.className = "comentario";
  nuevo.innerHTML = "<strong>" + nombre + "</strong><br>" + mensaje;

  // Lo agregamos hasta arriba de la lista.
  lista.prepend(nuevo);

  // Limpiamos el formulario para el siguiente comentario.
  form.reset();
});
