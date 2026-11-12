# Jardín para Valeria — Sorpresa del día 3 🌸

Proyecto interactivo con HTML, CSS y JavaScript. Las flores crecen al tocarlas, muestran mensajes y hay mariposas animadas.

## Estructura
```text
Jardin-para-Valeria-Dia-3/
├── index.html
├── css/
│   └── styles.css
└── js/
    └── script.js
```

## Abrir en VS Code
1. Descarga y descomprime el ZIP.
2. Abre la carpeta `Jardin-para-Valeria-Dia-3` en VS Code.
3. Instala Live Server si aún no lo tienes.
4. Haz clic derecho en `index.html` y elige **Open with Live Server**.

## Personalizar los mensajes
Abre `js/script.js` y edita el arreglo `mensajes`. Cada objeto contiene:
- `categoria`: etiqueta pequeña sobre el título.
- `titulo`: título del mensaje emergente.
- `texto`: mensaje que aparece al tocar la flor.
- `simbolo`: detalle decorativo.

Cambia los ejemplos por tus propias palabras. No presentes textos ficticios como recuerdos reales.

## Cambiar los nombres de las flores
En `index.html`, busca los textos `Flor de alegría`, `Flor de calma`, etc., dentro de cada `button.flower-spot`.

## Cambiar colores
En `css/styles.css`, al principio encontrarás variables CSS como `--ink`, `--green` y `--pink`. Cambia sus códigos hexadecimales para personalizar la paleta.

## Publicar en GitHub Pages
Crea un repositorio, por ejemplo `Jardin-para-Valeria-Dia-3`. En la terminal, dentro de esta carpeta, ejecuta (reemplaza `TU-USUARIO`):

```bash
git init
git add .
git commit -m "Crear jardín interactivo para Valeria"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/Jardin-para-Valeria-Dia-3.git
git push -u origin main
```

Luego ve a **Settings → Pages → Deploy from a branch**, selecciona `main` y `/ (root)`, y pulsa **Save**.

Tu enlace tendrá esta forma:
`https://TU-USUARIO.github.io/Jardin-para-Valeria-Dia-3/`

## Comprobaciones
- Toca las cinco flores: cada una debe crecer y abrir su mensaje.
- Cierra la ventana con la X, el botón inferior, fuera del cuadro o con Escape.
- El contador debe llegar a 5 de 5.
- Pulsa **Volver a empezar**: las flores deben cerrarse y el contador volver a cero.
- Prueba el diseño en el celular y revisa la consola del navegador.

Nota: GitHub Pages publica el sitio para cualquiera que tenga acceso al enlace; no incluyas datos privados ni fotos que no tengas permiso para compartir.
