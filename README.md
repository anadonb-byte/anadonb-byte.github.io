# Web personal — Alberto Anadón Barcelona

Sitio estático con [Hugo](https://gohugo.io/) (≥ 0.163, *extended*) y plantilla propia,
publicado en <https://anadonb-byte.github.io/> por GitHub Actions en cada `git push` a `main`.

## Dónde está cada cosa

| Qué quieres cambiar | Dónde |
|---|---|
| Puesto, frase de la portada, bio, bloque «Join the group», financiación (UE, AEI) y logos del pie | `data/profile.yaml` (imágenes en `static/images/logos/`) |
| Líneas de investigación (texto, imágenes, barra de escala) | `data/research.yaml` |
| Publicaciones seleccionadas (en el orden en que salen) | `data/publications.yaml` |
| Trayectoria (la formación está guardada pero no se muestra) | `data/career.yaml` |
| Financiación, premios y servicio | `data/awards.yaml` |
| Noticias | `content/blogs/*.md` |
| Menú, descripción del sitio, imagen para redes | `hugo.yaml` |
| Colores y tipografía | variables al principio de `assets/css/main.css` |

## Añadir una noticia

1. Copia la foto a `static/images/news/` (JPG, unos 1600 px de ancho).
2. Crea el post: `hugo new blogs/nombre-de-la-noticia.md`, o copia uno existente.
3. Rellena `image`, `description` y `summary` y pon `draft: false`.
4. `git add`, `git commit`, `git push`. En un par de minutos está publicada.

La imagen de `image:` sale como cabecera del post y en las tarjetas: no la repitas dentro del texto.

## Previsualizar en local

```bash
hugo server
```

Y abre <http://localhost:1313>. Compila sin avisos con `hugo --panicOnWarning`.

## Notas

- **Barras de escala de las SEM.** Van en HTML sobre la imagen (`scalebar.width` en
  `data/research.yaml`, en % del ancho). Se midieron sobre la barra de datos del microscopio:
  401,5 px/µm a 25 000× y 281,0 px/µm a 17 500×. Si cambias el recorte, recalcula el porcentaje.
- **Fuentes.** Inter y Source Serif 4 (licencia OFL) van alojadas en `static/fonts/`, sin Google Fonts.
- **Metadatos de las publicaciones** comprobados contra Crossref el 30-sep-2026.
