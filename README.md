# AUREUM BANK
Banca digital ficticia (HTML5 + CSS3 + JavaScript puro, sin backend) para Desarrollo de Aplicaciones Web.

## Ejecutar
Abre la carpeta en VS Code y usa **Live Server** sobre `index.html` (Web Crypto exige `localhost` o HTTPS). También sirve en GitHub Pages.

## Credenciales demo
`demo@aureum.bank` / `Demo1234` (o crea una cuenta en Registro).

## Funcionalidades
Inicio, registro, login, dashboard con gráficas Canvas, cuentas (crear), transferencias con validación, movimientos con filtros, tarjetas virtuales, perfil, centro de seguridad, conversor de divisas y notificaciones. Datos en LocalStorage por usuario.

## Características especiales
- **AES-GCM 256**: PBKDF2 + IV aleatorio, cifrado/descifrado interactivo (página Seguridad).
- **Tarjetas 3D**: `perspective` + `rotateY(180deg)`; clic, teclado o botón.
- **API externa**: `https://open.er-api.com/v6/latest/{MONEDA}` con Fetch, indicador de carga, manejo de errores y última tasa guardada como respaldo.

## Estructura
`index.html`; `pages/*.html` (una por sección); `css/styles.css`; `js/storage.js` (datos), `js/main.js` (layout, gráficas, arranque), `js/pages.js` (lógica de cada página); `assets/icons/logo.svg`.

## Limitaciones
Prototipo: hash SHA-256 sin sal en el navegador, sin servidor ni dinero real; los datos viven en el navegador y se pierden al borrarlo. La verificación en dos pasos es simulada.
