# Quinta Los Nietos

Sitio web de la quinta, hecho con **React + TypeScript + Vite + Tailwind CSS**.
Incluye el menú `GooeyNav` y la galería `AccordionGallery` de [React Bits](https://reactbits.dev).

## Desarrollo

```bash
npm install
npm run dev      # servidor local en http://localhost:5173
npm run build    # genera la carpeta dist/
```

## Qué editar

Todo el contenido está en [`src/data/site.ts`](src/data/site.ts):

- **`contact`**: WhatsApp, Instagram, email, dirección y link de Google Maps. Los campos vacíos no se muestran.
- **`galleryItems`**: fotos y textos de la galería.
- **`spaces`**: tarjetas de la sección "Espacios".

Las fotos y el video están en `public/imagenes` y `public/video`. Para agregar una foto, copiala a `public/imagenes`
y referenciala con `asset('imagenes/mi-foto.jpg')`.

## Publicar en GitHub Pages

1. Subí el proyecto a un repositorio de GitHub (rama `main`).
2. En el repositorio: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. Cada vez que hagas `push` a `main`, el workflow [`deploy.yml`](.github/workflows/deploy.yml) compila y publica el sitio.

El sitio queda en `https://TU-USUARIO.github.io/NOMBRE-DEL-REPO/`.
