# Taller de Programación — Material de apoyo

Material para enseñar **HTML, CSS y JavaScript básico** a niñas de secundaria.

La idea central: en vez de proyectos sueltos, todo gira en torno a **un solo
proyecto que crece por capas** — una página web sobre *algo que les gusta*
(una artista, una película, su mascota, un videojuego...).

> 📘 **¿Vas a impartir el taller?** Lee primero **[`GUIA_DOCENTE.md`](GUIA_DOCENTE.md)**:
> trae toda la teoría técnica de los 4 días explicada con ejemplos, los retos
> resueltos y los errores típicos que verás en clase.

---

## 📂 Cómo está organizado

```
files-template/
├── index.html              ← Portada. Ábrela primero, enlaza a todo.
│
├── plantilla-base/         ⭐ EL PROYECTO PRINCIPAL: "Mi Fan-Page"
│   ├── ejemplo/            Versión completa y funcionando (para proyectar).
│   └── para-llenar/        Versión con huecos ✏️ para que la armen ellas.
```

Para abrir cualquier página: doble clic en su `index.html` (se abre en el
navegador). No necesitas instalar nada.

---

## 🎓 Cómo usarlo en clase

El proyecto **Mi Fan-Page** está pensado para construirse en 3 etapas. Las
alumnas trabajan siempre la carpeta `plantilla-base/para-llenar/` y le van
agregando capas. Cuando se atoren, abren `plantilla-base/ejemplo/`, que es la
versión completa y funciona como **solucionario**.

La versión `para-llenar` es un **andamio**, no está resuelta:
- `✏️` = aquí cambias un texto por el tuyo.
- `👉 TU TURNO` = aquí escribes tú las etiquetas o el código, copiando el
  ejemplo que quedó justo arriba.

### Clase 1 — HTML (la estructura)
- Archivo: `para-llenar/index.html`
- En cada lista (galería, tabla, Top 5, preguntas) dejé **un bloque modelo**
  ya hecho; en los `👉 TU TURNO` ellas copian ese patrón para crear los demás.
- También llenan los textos marcados con `✏️`.
- Etiquetas que aparecen, de lo más simple a lo más rico:
  - `<h1>`, `<h2>`, `<p>`, `<span>`, `<div>` — texto y bloques
  - `<nav>` y enlaces internos (`<a href="#...">`) — menú que salta a secciones
  - `<table>`, `<tr>`, `<th>`, `<td>` — la ficha técnica
  - `<ol>` / `<li>` — la lista del Top 5
  - `<figure>` / `<figcaption>` — la galería
  - `<blockquote>` / `<cite>` — la frase favorita
  - `<form>`, `<input>`, `<textarea>`, `<button>` — los comentarios
  - `<details>` / `<summary>` — preguntas que se abren y cierran (¡sin JS!)
- Concepto clave: las **etiquetas** son las piezas con las que se arma una página,
  y cada una tiene su trabajo.

### Clase 2 — CSS (el estilo)
- Archivo: `para-llenar/style.css`
- Cambian los **colores** del tema (variable `--color` hasta arriba) y
  resuelven los `👉 TU TURNO` del CSS (hacer la foto redonda, las etiquetas
  tipo píldora y el efecto al pasar el mouse).
- Conceptos que se ven de paso: variables de color, `grid` (galería),
  `flex` (menú) y `:hover`.
- Concepto clave: el CSS no cambia el contenido, cambia **cómo se ve**.

### Clase 3 — JavaScript (la interactividad)
- Archivo: `para-llenar/script.js`
- Cada reto trae pistas paso a paso pero SIN el código escrito: lo teclean
  ellas debajo de cada `✏️ ESCRIBE TU CÓDIGO`.
- **3 retos base** (los de la clase):
  1. 🎲 Botón de **dato al azar**
  2. 💖 Botón de **"me gusta"** con contador
  3. 🌙 **Modo oscuro** (claro/oscuro)
- **2 retos extra (opcionales 🌟)** para quien termine rápido o como tarea:
  - 🎨 Botones que **cambian el color** del tema al instante
  - 💬 Formulario que **agrega comentarios** nuevos a la lista
- Conceptos que se ven: variables, `addEventListener`, `Math.random`,
  cambiar texto/estilos, leer un formulario y crear elementos nuevos.
- La solución de los 5 está en `ejemplo/script.js`.
- Concepto clave: el JavaScript hace que la página **reaccione**.

> 💡 Los tres mini-proyectos de `ejemplos/` sirven como apoyo: si quieres
> reforzar solo JS, abre el generador; si quieres practicar galerías, abre
> la galería, etc.

---

## 🖼️ Tip: usar fotos de verdad

Por defecto todo usa emojis (funcionan sin internet y sin descargar nada).
Para usar una foto real se cambia el emoji por una etiqueta `<img>`. Por
ejemplo, en la galería:

```html
<div class="imagen"><img src="AQUÍ-VA-LA-DIRECCIÓN" alt="Una foto"></div>
```

Hay **dos formas** de conseguir esa dirección (las dos vienen explicadas
paso a paso en un comentario `💡` dentro de `para-llenar/index.html`):

- **Forma 1 · Copiar el enlace de internet** — clic derecho sobre la imagen
  → "Copiar dirección de la imagen" → pegarla en el `src`.
  *Rápido, pero necesita internet y el enlace puede dejar de funcionar.*
- **Forma 2 · Descargar la imagen (recomendada)** — clic derecho →
  "Guardar imagen como..." → guardarla en una carpeta `imagenes/` junto al
  HTML, y usar `src="imagenes/foto1.jpg"`.
  *Funciona sin internet y no se rompe; ideal para el salón.*

> 💡 Buen momento para hablar del `alt`: el texto que describe la imagen
> para quien no puede verla.

---

## ✅ Notas
- Todo funciona sin conexión a internet y sin instalar programas.
- Pensado para que cada alumna termine con **una página propia** de la que
  se sienta dueña.
