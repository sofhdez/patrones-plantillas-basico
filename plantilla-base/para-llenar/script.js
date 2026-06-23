// ===========================================================
//   JAVASCRIPT DE MI FAN-PAGE  ·  VERSIÓN PARA LLENAR
//   El JavaScript hace que la página REACCIONE cuando la tocas.
//
//   Hay 3 RETOS BASE y, más abajo, 2 RETOS EXTRA (opcionales).
//   Cada uno trae pistas paso a paso, pero el código lo escribes TÚ.
//   ¿Te atoras? La solución completa está en "ejemplo/script.js".
//
//   RECORDATORIO de las 3 piezas que vas a usar:
//   · document.getElementById("loquesea")  -> busca un elemento por su id
//   · elemento.addEventListener("click", function () { ... }) -> "cuando hagan clic..."
//   · elemento.textContent = "..."  -> cambia el texto que se ve
// ===========================================================


// ===========================================================
//   RETOS BASE (estos son los de la clase)
// ===========================================================


// ----------  RETO 1) DATO CURIOSO AL AZAR  ----------
//
// Objetivo: que al hacer clic en el botón aparezca un dato al azar.
//
// Paso 1: crea una lista (array) llamada "datos" con varias frases.
//         Pista:  const datos = ["frase 1", "frase 2", "frase 3"];
//
// Paso 2: guarda el botón y el texto en variables.
//         Pista:  const botonDato = document.getElementById("boton-dato");
//                 const dato = document.getElementById("dato");
//
// Paso 3: cuando hagan clic, elige un número al azar y muestra ese dato.
//         Pista:  botonDato.addEventListener("click", function () {
//                   const azar = Math.floor(Math.random() * datos.length);
//                   dato.textContent = datos[azar];
//                 });
//
// ✏️ ESCRIBE TU CÓDIGO AQUÍ ABAJO:




// ----------  RETO 2) BOTÓN DE "ME GUSTA"  ----------
//
// Objetivo: que cada clic en 💖 sume 1 al contador.
//
// Paso 1: guarda el botón (id "boton-like") y el número (id "likes").
// Paso 2: crea una variable que empiece en 0.   Pista:  let totalLikes = 0;
// Paso 3: en cada clic, súmale 1 y muéstralo.
//         Pista:  totalLikes = totalLikes + 1;
//                 likes.textContent = totalLikes;
//
// ✏️ ESCRIBE TU CÓDIGO AQUÍ ABAJO:




// ----------  RETO 3) MODO CLARO / OSCURO  ----------
//
// Objetivo: que el botón 🌙 cambie la página a modo oscuro y de vuelta.
//
// Paso 1: guarda el botón (id "boton-tema").
// Paso 2: en cada clic, ponle (o quítale) la clase "oscuro" al body.
//         Pista:  document.body.classList.toggle("oscuro");
//         (El CSS ya tiene listos los colores del modo oscuro.)
//
// ✏️ ESCRIBE TU CÓDIGO AQUÍ ABAJO:




// ===========================================================
//   RETOS EXTRA  ·  OPCIONALES 🌟
//   Si ya terminaste los 3 de arriba y quieres más, sigue aquí.
//   (No pasa nada si los dejas para después.)
// ===========================================================


// ----------  EXTRA A) CAMBIAR EL COLOR DEL TEMA  ----------
//
// Objetivo: que cada botón de color cambie el color principal.
//
// Paso 1: busca TODOS los botones de color a la vez.
//         Pista:  const botonesColor = document.querySelectorAll(".color-btn");
//
// Paso 2: a cada botón ponle su acción con forEach. Al hacer clic,
//         lee su color y cámbialo en la página.
//         Pista:  botonesColor.forEach(function (boton) {
//                   boton.addEventListener("click", function () {
//                     const nuevoColor = boton.getAttribute("data-color");
//                     document.documentElement.style.setProperty("--color", nuevoColor);
//                   });
//                 });
//
// ✏️ ESCRIBE TU CÓDIGO AQUÍ ABAJO:




// ----------  EXTRA B) FORMULARIO DE COMENTARIOS  ----------
//
// Objetivo: que al enviar el formulario aparezca un comentario nuevo.
//
// Paso 1: guarda el formulario (id "form-comentario"), los campos
//         (id "nombre" y "mensaje") y la lista (id "lista-comentarios").
//
// Paso 2: escucha el envío del formulario y evita que se recargue.
//         Pista:  form.addEventListener("submit", function (evento) {
//                   evento.preventDefault();
//
// Paso 3: lee lo que escribieron, crea un <div> nuevo y agrégalo.
//         Pista:  const nombre = campoNombre.value;
//                 const mensaje = campoMensaje.value;
//                 const nuevo = document.createElement("div");
//                 nuevo.className = "comentario";
//                 nuevo.innerHTML = "<strong>" + nombre + "</strong><br>" + mensaje;
//                 lista.prepend(nuevo);
//                 form.reset();
//                 });
//
// ✏️ ESCRIBE TU CÓDIGO AQUÍ ABAJO:
