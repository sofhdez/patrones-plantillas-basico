# 👩‍🏫 Guía docente — Taller de HTML, CSS y JavaScript

Guía técnica para impartir el taller en **4 días** (sesiones de 1.5 a 2 horas).
Pensada para **ti**: trae la teoría explicada de forma sencilla, ejemplos listos
para mostrar y los errores típicos que verás en clase.

Todo gira en torno al proyecto **Mi Fan-Page** (carpeta `plantilla-base/`).
Las alumnas trabajan `para-llenar/` y, cuando se atoran, miran `ejemplo/`.

---

## 🧭 Idea general (cuéntalo el día 1 en 2 minutos)

Una página web tiene **3 capas**, como una persona:

| Capa | ¿Qué hace? | Comparación |
|------|------------|-------------|
| **HTML** | La estructura y el contenido | El **esqueleto** |
| **CSS**  | Los colores, tamaños y forma | La **ropa** |
| **JavaScript** | Que la página reaccione | El **movimiento** |

Las 3 son archivos distintos que trabajan juntas:
`index.html` (HTML) llama a `style.css` (CSS) y a `script.js` (JS).

**Cómo abrir el proyecto:** doble clic en `index.html` → se abre en el
navegador. Para ver cambios: guardas el archivo y aprietas **F5** (recargar).

---
---

# 📅 DÍA 1 — HTML (la estructura)

**Objetivo:** que entiendan qué es una etiqueta y armen la estructura de su página.

## 1. ¿Qué es HTML?

Es el lenguaje con el que se escribe el **contenido** de una página: textos,
imágenes, listas, botones... Se escribe con **etiquetas**.

## 2. Cómo funciona una etiqueta

Casi todas las etiquetas se **abren y se cierran**, y en medio va el contenido:

```html
<h1>Hola</h1>
```

- `<h1>` → etiqueta de **apertura**
- `Hola` → el **contenido**
- `</h1>` → etiqueta de **cierre** (lleva una diagonal `/`)

> 🔑 Regla de oro: **lo que se abre, se cierra.** El error #1 de la clase será
> olvidar cerrar una etiqueta.

Algunas etiquetas no tienen contenido y no se cierran, como la imagen:

```html
<img src="foto.jpg" alt="Mi foto">
```

## 3. Atributos

Son "ajustes" que van dentro de la etiqueta de apertura, con `nombre="valor"`:

```html
<a href="https://google.com">Ir a Google</a>
```

Aquí `href` es el atributo que dice a dónde lleva el enlace. Los que usaremos:
- `href` → dirección de un enlace
- `src` → dirección de una imagen
- `alt` → texto que describe la imagen (para quien no la ve)
- `class` e `id` → "nombres" para que CSS y JS encuentren el elemento (día 2 y 3)

## 4. La estructura mínima de un documento

```html
<!DOCTYPE html>          <!-- "esto es una página moderna" -->
<html lang="es">          <!-- empieza la página, en español -->
<head>                    <!-- información que NO se ve -->
  <meta charset="UTF-8">  <!-- para que acentos y emojis funcionen -->
  <title>Mi página</title><!-- el nombre de la pestaña -->
</head>
<body>                    <!-- TODO lo que SÍ se ve va aquí -->
  <h1>¡Hola!</h1>
</body>
</html>
```

> 💡 Idea simple: **`<head>` = lo de adentro que no se ve** (configuración);
> **`<body>` = lo que sí se ve.**

## 5. Las etiquetas que verán en el proyecto

**Texto**
```html
<h1>Título grande</h1>     <!-- h1 es el más grande, h2 más chico... hasta h6 -->
<h2>Subtítulo</h2>
<p>Un párrafo de texto normal.</p>
<span>Un trocito de texto</span>
```

**Listas**
```html
<ul>                 <!-- lista con puntos -->
  <li>Manzana</li>   <!-- cada li es un elemento -->
  <li>Pera</li>
</ul>

<ol>                 <!-- lista NUMERADA (1, 2, 3...) -->
  <li>Primer lugar</li>
  <li>Segundo lugar</li>
</ol>
```

**Enlaces** (normal y "salto" dentro de la misma página)
```html
<a href="https://wikipedia.org">Ir a Wikipedia</a>
<a href="#galeria">Ir a mi galería</a>   <!-- salta a id="galeria" -->
```

**Imagen**
```html
<img src="imagenes/gato.jpg" alt="Mi gato">
```

**Tabla** (filas y columnas)
```html
<table>
  <tr>                        <!-- tr = una fila -->
    <th>Nombre</th>           <!-- th = celda de título -->
    <td>Frida Kahlo</td>      <!-- td = celda de dato -->
  </tr>
</table>
```

**Cita**
```html
<blockquote>
  "Frase bonita aquí."
  <cite>— Quién la dijo</cite>
</blockquote>
```

**Contenedores** (cajas para agrupar y ordenar)
```html
<div>...</div>          <!-- caja genérica -->
<header>...</header>    <!-- encabezado -->
<section>...</section>  <!-- una sección -->
<nav>...</nav>          <!-- un menú -->
<footer>...</footer>    <!-- pie de página -->
<figure>                <!-- imagen + su texto -->
  <img src="..." alt="...">
  <figcaption>Texto debajo de la foto</figcaption>
</figure>
```

**Comentarios** (notas que no se ven en la página)
```html
<!-- Esto es un comentario, el navegador lo ignora -->
```

## 6. Anidar (poner unas dentro de otras)

Las etiquetas viven unas dentro de otras, como cajas dentro de cajas:

```html
<section>
  <h2>Galería</h2>
  <figure>
    <img src="gato.jpg" alt="Gato">
    <figcaption>Mi gato</figcaption>
  </figure>
</section>
```

> 💡 Consejo visual: la **sangría** (espacios a la izquierda) ayuda a ver qué
> está dentro de qué. Insiste en que ordenen así su código.

## 7. Manos a la obra (lo que hacen hoy)

En `plantilla-base/para-llenar/index.html`:
- Cambian los textos marcados con `✏️` (nombre, descripción, etiquetas...).
- Resuelven los `👉 TU TURNO`: copian el bloque modelo para crear las demás
  filas de la tabla, los `<li>` del Top 5, las tarjetas de la galería, etc.

## ⚠️ Errores típicos del día 1
- **Olvidar cerrar** una etiqueta (`<p>` sin `</p>`) → el resto se ve raro.
- **Comillas sin cerrar** en un atributo (`href="...` sin la otra comilla).
- Escribir el cierre **sin la diagonal** (`<p>` en vez de `</p>`).
- Acentos raros → casi siempre falta `<meta charset="UTF-8">`.

---
---

# 📅 DÍA 2 — CSS (el estilo)

**Objetivo:** que entiendan cómo cambiar colores, tamaños y forma, y que conozcan
selectores y el modelo de caja.

## 1. ¿Qué es CSS?

Es el lenguaje del **diseño**: colores, tipos de letra, tamaños, espacios,
bordes redondos... No cambia el contenido, cambia **cómo se ve**.

## 2. Cómo se conecta con el HTML

En el `<head>` del HTML hay una línea que "llama" al archivo de estilos:

```html
<link rel="stylesheet" href="style.css">
```

## 3. La sintaxis (la fórmula que se repite siempre)

```css
selector {
  propiedad: valor;
}
```

Ejemplo:
```css
h1 {
  color: pink;        /* el color del texto */
  font-size: 30px;    /* el tamaño de la letra */
}
```

Se lee: *"a todos los `<h1>` ponles letra rosa de 30 píxeles."*

> 🔑 Cada línea termina en **punto y coma `;`** y cada bloque va entre **llaves `{ }`**.

## 4. Selectores (cómo eliges QUÉ vas a pintar)

```css
h1        { }   /* todos los <h1>                          (por etiqueta) */
.tarjeta  { }   /* todos los que tengan class="tarjeta"    (por CLASE, con .) */
#dato     { }   /* el que tenga id="dato"                  (por ID, con #) */
.menu a   { }   /* los <a> que estén dentro de .menu       (anidado) */
.boton:hover { } /* un botón CUANDO le pasas el mouse encima */
```

> 💡 Diferencia clave:
> **clase (`.`)** se puede repetir en muchos elementos;
> **id (`#`)** debería ser único (uno solo en la página).

## 5. Propiedades que más usarán

```css
color: white;                /* color del texto */
background: #E0568A;         /* color de fondo */
font-size: 18px;             /* tamaño de letra */
font-family: system-ui;      /* tipo de letra */
text-align: center;          /* alinear texto (left, center, right) */
padding: 20px;               /* espacio por DENTRO del borde */
margin: 20px;                /* espacio por FUERA del borde */
border: 2px solid black;     /* borde */
border-radius: 16px;         /* esquinas redondeadas */
width: 100%;                 /* ancho */
height: 130px;               /* alto */
```

### Colores: hay 2 formas
```css
color: pink;        /* por nombre (pocos) */
color: #E0568A;     /* código hexadecimal (cualquiera) */
```

## 6. El modelo de caja (box model) — explícalo con un dibujo

Cada elemento es una caja con 4 capas, de adentro hacia afuera:

```
┌───────────── margin (espacio por fuera) ─────────────┐
│  ┌────────── border (el borde) ──────────┐           │
│  │  ┌─────── padding (espacio interno) ──┐│           │
│  │  │        CONTENIDO (texto/imagen)    ││           │
│  │  └────────────────────────────────────┘│           │
│  └─────────────────────────────────────────┘          │
└───────────────────────────────────────────────────────┘
```

- **padding** = relleno por dentro (separa el contenido del borde).
- **margin** = aire por fuera (separa esta caja de las demás).

Es el concepto que más cuesta; vale la pena dibujarlo en el pizarrón.

## 7. Variables de color (`:root`)

En vez de repetir el mismo color 20 veces, lo guardamos una vez y lo
reutilizamos. Si lo cambias arriba, cambia toda la página:

```css
:root {
  --color: #E0568A;     /* guardamos el color con un nombre */
}

h1     { color: var(--color); }   /* lo usamos con var() */
button { background: var(--color); }
```

## 8. Acomodar cosas (layout): Flexbox y Grid

**Flexbox** = poner elementos en **fila** y repartirlos:
```css
.menu {
  display: flex;            /* los hijos se ponen en fila */
  gap: 8px;                 /* espacio entre ellos */
  justify-content: center;  /* los centra */
}
```

**Grid** = una **cuadrícula** (lo usamos en la galería):
```css
.galeria {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 16px;   /* columnas automáticas de mínimo 150px */
}
```

## 9. Que una imagen llene su recuadro

```css
.imagen img {
  width: 100%;
  height: 100%;
  object-fit: cover;   /* recorta lo que sobra sin deformar la foto */
}
```

## 10. Efectos al pasar el mouse (`:hover`)

```css
.tarjeta:hover {
  transform: translateY(-4px);   /* la sube 4px */
}
```

## 11. Manos a la obra (lo que hacen hoy)

En `para-llenar/style.css`:
- Cambian la variable `--color` y ven cómo cambia TODA la página.
- Resuelven los `👉 TU TURNO` de CSS: hacer la foto redonda (`border-radius: 50%`),
  las etiquetas tipo píldora (`border-radius: 999px`) y el efecto `:hover`.

## ⚠️ Errores típicos del día 2
- Olvidar el **punto y coma `;`** o una **llave `}`** → de ahí para abajo se rompe.
- Confundir **`.` (clase)** con **`#` (id)** en el selector.
- Poner el estilo y no ver cambios → casi siempre no guardaron, o el selector
  no coincide con la clase del HTML (revisar que digan exactamente lo mismo).
- Confundir **padding** (dentro) con **margin** (fuera).

---
---

# 📅 DÍA 3 — JavaScript base (la interactividad)

**Objetivo:** que la página REACCIONE. Hoy resuelven los **3 retos base**.

> 🛠️ Herramienta del día: la **Consola**. Se abre con **F12** (o clic derecho →
> "Inspeccionar" → pestaña "Console"). Ahí aparecen los errores de JS en rojo.
> Enséñales a leerla desde el principio: es su mejor amiga para depurar.

## 1. ¿Qué es JavaScript?

Es el lenguaje que hace que la página **haga cosas**: responder a un clic,
mostrar mensajes, contar, cambiar colores... Es el "movimiento" de la página.

## 2. Cómo se conecta con el HTML

Hasta abajo del `<body>` hay una línea que llama al archivo de JS:

```html
<script src="script.js"></script>
```

## 3. Variables (cajitas para guardar datos)

```js
let edad = 12;            // let = puede cambiar después
const nombre = "Ana";     // const = no va a cambiar
```

## 4. Tipos de datos que usaremos

```js
const texto = "Hola";              // texto (string), va entre comillas
const numero = 5;                  // número (sin comillas)
const lista = ["a", "b", "c"];     // lista (array): varias cosas juntas
```

De una lista sacas un elemento por su **posición**, que empieza en **0**:
```js
lista[0];   // "a"   (¡el primero es el 0, no el 1!)
lista[1];   // "b"
```

## 5. Encontrar un elemento de la página

Para tocar algo del HTML, primero lo "agarras" por su `id`:
```js
const boton = document.getElementById("boton-dato");
```
O agarras varios a la vez por su clase:
```js
const botones = document.querySelectorAll(".color-btn");
```

## 6. Eventos: "cuando pase algo, haz esto"

```js
boton.addEventListener("click", function () {
  // esto se ejecuta CADA vez que hacen clic
});
```
Se lee: *"al botón, escúchale el clic; cuando pase, corre esta función."*

## 7. Cambiar lo que se ve

```js
elemento.textContent = "Texto nuevo";   // cambia el texto
```

## 8. Número al azar

```js
Math.random();                    // un número al azar entre 0 y 1
Math.floor(3.7);                  // redondea hacia abajo -> 3
Math.floor(Math.random() * 5);    // un entero al azar: 0, 1, 2, 3 o 4
```

---

## 🎯 RETO 1 — Dato curioso al azar (explicado línea por línea)

```js
const datos = ["Dato 1", "Dato 2", "Dato 3"];     // 1) la lista de frases

const botonDato = document.getElementById("boton-dato");  // 2) agarro el botón
const dato = document.getElementById("dato");             //    y el texto

botonDato.addEventListener("click", function () {         // 3) al hacer clic...
  const azar = Math.floor(Math.random() * datos.length);  //    elijo posición al azar
  dato.textContent = datos[azar];                         //    muestro ese dato
});
```
`datos.length` es "cuántos hay en la lista", para que el azar nunca se pase.

## 🎯 RETO 2 — Botón de "me gusta" con contador

```js
const botonLike = document.getElementById("boton-like");
const likes = document.getElementById("likes");

let totalLikes = 0;                          // empiezo en 0 (let, porque va a cambiar)

botonLike.addEventListener("click", function () {
  totalLikes = totalLikes + 1;               // sumo 1
  likes.textContent = totalLikes;            // lo muestro
});
```

## 🎯 RETO 3 — Modo claro / oscuro

```js
const botonTema = document.getElementById("boton-tema");

botonTema.addEventListener("click", function () {
  document.body.classList.toggle("oscuro");  // pone o quita la clase "oscuro"
});
```
`classList.toggle` es un interruptor: si no está la clase la pone, si está la quita.
El CSS ya tiene los colores del modo oscuro listos en `body.oscuro { ... }`.

## ⚠️ Errores típicos del día 3
- El `id` del JS **no coincide** con el del HTML (`"boton-dato"` vs `"botondato"`).
  → en la consola sale algo como *"null"*. Revisar que digan EXACTAMENTE lo mismo.
- Olvidar las **comillas** en los textos, o mezclar `"` con `'`.
- Olvidar el **`;`** o un **`)`** o **`}`** de cierre.
- Mayúsculas: JS distingue `Click` de `click`. Casi todo va en minúscula.
- No abrir la consola → "no funciona" sin saber por qué. Insiste en F12.

---
---

# 📅 DÍA 4 — JavaScript extra + cierre

**Objetivo:** retos opcionales para quien quiera más, poner fotos reales y
**presentar** el proyecto terminado.

Empieza con un **repaso de 10 min** de los 3 retos del día 3.

## 🌟 RETO EXTRA A — Cambiar el color del tema

Conceptos nuevos: agarrar **varios** elementos y recorrerlos con `forEach`, y
leer un atributo `data-...`.

```js
const botonesColor = document.querySelectorAll(".color-btn");  // varios botones

botonesColor.forEach(function (boton) {        // a CADA botón...
  boton.addEventListener("click", function () {
    const nuevoColor = boton.getAttribute("data-color");        // leo su color
    document.documentElement.style.setProperty("--color", nuevoColor); // lo aplico
  });
});
```
En el HTML cada botón guarda su color en un atributo propio:
```html
<button class="color-btn" data-color="#7048E8"></button>
```
`forEach` significa "para cada uno"; así no escribimos el mismo código 5 veces.

## 🌟 RETO EXTRA B — Formulario de comentarios

Conceptos nuevos: leer lo que el usuario escribe (`.value`), evitar que la
página se recargue (`preventDefault`) y **crear** elementos nuevos.

```js
const form = document.getElementById("form-comentario");
const campoNombre = document.getElementById("nombre");
const campoMensaje = document.getElementById("mensaje");
const lista = document.getElementById("lista-comentarios");

form.addEventListener("submit", function (evento) {
  evento.preventDefault();                    // que NO se recargue la página

  const nombre = campoNombre.value;           // leo lo que escribieron
  const mensaje = campoMensaje.value;

  const nuevo = document.createElement("div");           // creo una caja nueva
  nuevo.className = "comentario";
  nuevo.innerHTML = "<strong>" + nombre + "</strong><br>" + mensaje;

  lista.prepend(nuevo);                       // la pongo hasta arriba de la lista
  form.reset();                               // limpio el formulario
});
```

- `.value` = lo que está escrito en un campo.
- `createElement` = crear una etiqueta nueva desde JS.
- `prepend` = agregar al principio (usa `append` para agregar al final).

## 🖼️ Poner fotos de verdad (2 formas)

Cambiar el emoji por una imagen:
```html
<div class="imagen"><img src="AQUÍ-VA-LA-DIRECCIÓN" alt="Una foto"></div>
```

- **Forma 1 · Copiar el enlace:** clic derecho sobre una imagen de internet →
  "Copiar dirección de la imagen" → pegar en el `src`.
  *Rápido, pero necesita internet y el enlace puede romperse.*
- **Forma 2 · Descargar (recomendada):** clic derecho → "Guardar imagen
  como..." → guardarla en una carpeta `imagenes/` junto al HTML → usar
  `src="imagenes/foto1.jpg"`. *Funciona sin internet.*

## 🎤 Cierre: presentar el proyecto (últimos 20-30 min)

- Cada alumna personaliza su tema (su artista, peli, mascota, equipo...).
- Que prueben los botones (dato, me gusta, modo oscuro, colores).
- Pequeña ronda donde muestran su página a las demás.
- Refuerza la idea final: **HTML (estructura) + CSS (estilo) + JS (interacción)**
  son 3 capas del mismo proyecto.

## ⚠️ Errores típicos del día 4
- En el formulario, olvidar `evento.preventDefault()` → la página se recarga y
  "parece que no pasó nada".
- En `forEach`, escribir mal el nombre de la clase del selector.
- Imágenes que no aparecen → ruta mal escrita o el archivo no está en la carpeta
  `imagenes/` (revisar nombre y extensión: `.jpg`, `.png`).

---
---

# 📒 Chuleta rápida (para tener a la mano)

| Quiero... | Lenguaje | Código |
|-----------|----------|--------|
| Un título | HTML | `<h1>Texto</h1>` |
| Un párrafo | HTML | `<p>Texto</p>` |
| Una imagen | HTML | `<img src="foto.jpg" alt="...">` |
| Un enlace | HTML | `<a href="...">Texto</a>` |
| Una lista | HTML | `<ul><li>...</li></ul>` |
| Cambiar color de texto | CSS | `color: #E0568A;` |
| Color de fondo | CSS | `background: #FAFAF8;` |
| Esquinas redondas | CSS | `border-radius: 16px;` |
| Espacio interno / externo | CSS | `padding: 20px;` / `margin: 20px;` |
| Centrar en fila | CSS | `display: flex; justify-content: center;` |
| Guardar un dato | JS | `let x = 5;` |
| Agarrar un elemento | JS | `document.getElementById("id")` |
| Responder a un clic | JS | `elemento.addEventListener("click", function(){ })` |
| Cambiar un texto | JS | `elemento.textContent = "nuevo";` |
| Número al azar (0 a 4) | JS | `Math.floor(Math.random() * 5)` |

---

# 🆘 Mini-glosario

- **Etiqueta:** la pieza básica del HTML, ej. `<p>...</p>`.
- **Atributo:** un ajuste dentro de una etiqueta, ej. `href`, `src`, `class`.
- **Clase / id:** "nombres" para que CSS y JS encuentren un elemento.
- **Selector:** en CSS, a quién le aplicas el estilo (`h1`, `.clase`, `#id`).
- **Propiedad / valor:** en CSS, qué cambias y a qué (`color: red;`).
- **Variable:** en JS, una cajita con un dato (`let`, `const`).
- **Función:** un bloque de instrucciones que se ejecuta cuando se le llama.
- **Evento:** algo que pasa (un clic, enviar un formulario) y dispara código.
- **Consola:** la ventana (F12) donde aparecen los errores de JavaScript.

---

> 💡 Recordatorio para ti: la versión `ejemplo/` es el **solucionario** completo.
> Si una alumna se atora, abran ese archivo y comparen. ¡Mucho éxito! 💛
