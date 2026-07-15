# DJ Portfolio / Presskit Digital

Proyecto base en React + TypeScript + Vite para crear la web oficial de un DJ con enfoque real de booking, perfil artístico, galería visual y presskit descargable.

## 1. Cómo instalar el proyecto

```bash
npm install
```

## 2. Cómo ejecutar la web

```bash
npm run dev
```

La app quedará disponible en la URL local que indique Vite.

## 3. Dónde cambiar mi información

Todo el contenido editable está centralizado en:

`src/data/djContent.ts`

Desde ese archivo puedes cambiar:

- Nombre artístico.
- Claim principal.
- SEO.
- Biografía corta y larga.
- Redes sociales.
- Bloque de sonido.
- Galería.
- Escenarios y trayectoria.
- Datos de contacto.
- Archivos del presskit.

## 4. Dónde colocar mis fotografías

Coloca tus imágenes en estas carpetas de `public/media/`:

- `public/media/hero/`
- `public/media/gallery/`
- `public/media/branding/`
- `public/media/covers/`

Después actualiza las rutas dentro de `src/data/djContent.ts`.

## 5. Dónde colocar mis logos

Guarda tus logos en:

`public/media/branding/`

Luego sustituye las rutas del bloque `presskit.logos` en `src/data/djContent.ts`.

## 6. Cómo añadir una sesión

Añade un nuevo objeto al array:

`djContent.music.sessions`

Campos disponibles:

- `title`
- `cover`
- `date`
- `genre`
- `platform`
- `duration`
- `description`
- `embedUrl`
- `featured`
- `links`

Si quieres que una sesión sea la destacada, usa `featured: true`.

## 7. Cómo editar la sección de escenarios

La sección de trayectoria y escenarios está en:

`djContent.scene`

Desde ahí puedes cambiar:

- `intro`
- `milestones`
- `venues`
- `territories`
- `lineUp`

## 8. Cómo editar los datos de booking

Todo el bloque final de contacto está en:

`djContent.contact`

Puedes cambiar:

- Email.
- Teléfono.
- WhatsApp.
- CTA principal.
- Texto de cierre.

## 9. Cómo añadir un archivo al presskit

Usa estas colecciones dentro de:

`djContent.presskit`

- `officialPhotos`
- `logos`
- `documents`

Cada archivo admite:

- `label`
- `description`
- `file`

El PDF real actual está en:

- `public/media/presskit/Presskit_Alvaro_Redon.pdf`

## 10. Cómo cambiar colores

El color principal se configura en:

`src/data/djContent.ts`

Busca:

`theme.accent`

Además, las variables visuales globales están en:

`src/styles/theme.css`

## 11. Cómo cambiar tipografías

Las fuentes se cargan en:

`src/styles/theme.css`

Ahí puedes cambiar tanto el `@import` de Google Fonts como estas variables:

- `--font-sans`
- `--font-display`

## 12. Cómo compilar la web

```bash
npm run build
```

La versión final se generará en:

`dist/`

## 13. Cómo desplegarla gratis en Cloudflare Pages

Es la mejor opción si no quieres pagar dominio ahora mismo, porque Cloudflare te da un subdominio gratis tipo:

`tu-proyecto.pages.dev`

Pasos:

1. Sube este proyecto a GitHub.
2. Entra en Cloudflare y abre `Workers & Pages`.
3. Crea un proyecto nuevo de `Pages` conectando tu repositorio.
4. Usa esta configuración:

- Framework preset: `Vite`
- Build command: `npm run build`
- Build output directory: `dist`

5. Publica el proyecto.
6. Cloudflare te dará una URL gratis `pages.dev`.

Notas:

- Esta web ya queda preparada para funcionar sin dominio propio.
- El proyecto incluye un archivo `_redirects` para que las rutas internas de la SPA funcionen bien en Cloudflare Pages.
- El SEO ya no depende de una URL fija falsa: al abrir la web publicada, detecta automáticamente la URL real del sitio.
- Ya está incluido el workflow [`.github/workflows/deploy-cloudflare-pages.yml`](./.github/workflows/deploy-cloudflare-pages.yml) para desplegar automáticamente al hacer `push` a `master`.

## 14. Secretos necesarios para despliegue automático

Si vas a usar GitHub + Cloudflare Pages con el workflow ya preparado, añade estos secretos en GitHub:

- `CLOUDFLARE_API_TOKEN`
- `CLOUDFLARE_ACCOUNT_ID`

El workflow publica el proyecto con este nombre de Pages:

`alvaro-redon-dj`

Si quieres cambiar ese nombre, edita esta línea:

`command: pages deploy dist --project-name=alvaro-redon-dj`

Si más adelante quieres dominio propio, podrás conectarlo sin tocar el código.

## Estructura del proyecto

```text
src/
  components/
  data/
  hooks/
  sections/
  styles/
  types/

public/
  media/
    branding/
    covers/
    gallery/
    hero/
    presskit/
```

## Notas útiles

- La versión actual ya está adaptada con contenido real de Álvaro Redon.
- No necesitas tocar los componentes React para actualizar contenido normal.
- La galería tiene lightbox con teclado.
- La web respeta `prefers-reduced-motion`.
- El proyecto incluye `lint` con `oxlint` y compilación con Vite.
