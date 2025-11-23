# Generador QR - Backend

API REST desarrollada con Node.js y Express para generar códigos QR personalizados con soporte para logos, diferentes formatos de salida y múltiples tipos de contenido.

## 📋 Características

- Generación de códigos QR en múltiples formatos (PNG, JPG, PDF, SVG)
- Soporte para agregar logos personalizados a los códigos QR
- Personalización de colores del código QR
- Configuración de tamaño del código QR
- Soporte para diferentes tipos de contenido (URLs, WiFi, WhatsApp, etc.)
- CORS configurable para múltiples orígenes
- Procesamiento de imágenes con Sharp para optimización de logos

## 🛠️ Tecnologías

- **Node.js** - Runtime de JavaScript
- **Express** - Framework web para Node.js
- **QRCode** - Librería para generar códigos QR
- **Sharp** - Procesamiento de imágenes de alto rendimiento
- **CORS** - Manejo de políticas de origen cruzado
- **dotenv** - Gestión de variables de entorno

## 📦 Instalación

1. Asegúrate de tener Node.js instalado (versión 18 o superior recomendada)

2. Instala las dependencias usando pnpm (recomendado):

```bash
pnpm install
```
```

## ⚙️ Configuración

### Variables de Entorno

Crea un archivo `.env` en la raíz del directorio `Backend` con las siguientes variables:

```env
CORS_ORIGINS=http://localhost:5173
PORT=3800
```

**Variables requeridas:**

- `CORS_ORIGINS`: Lista de orígenes permitidos separados por comas. Estos son los dominios desde los cuales el frontend puede hacer peticiones a la API. En desarrollo, incluye `http://localhost:5173` (puerto por defecto de Vite) y otros puertos que uses. En producción, incluye el dominio de tu frontend.

### Ejemplo de `.env`:

```env
# Desarrollo
CORS_ORIGINS=http://localhost:5173 

```

El servidor se iniciará en `http://localhost:3800` (o el puerto especificado en `PORT`).

### Desarrollo

Para ejecutar el servidor en modo Desarrollo:

```bash
pnpm run dev
```
```
## 📡 Endpoints

### `GET /api`

Endpoint de prueba para verificar que la API está funcionando.

**Respuesta:**
```json
{
  "message": "API QR funcionando"
}
```

### `POST /api/generate-qr`

Genera un código QR con las opciones especificadas.

**Body (JSON):**
```json
{
  "url": "https://ejemplo.com",
  "size": 500,
  "format": "jpg",
  "color": "#000000",
  "logo": "data:image/png;base64,..." // Opcional
}
```

**Parámetros:**
- `url` (requerido): URL o contenido para el código QR
- `size` (opcional): Tamaño del código QR en píxeles (por defecto: 148)
- `format` (opcional): Formato de salida: `"png"`, `"jpg"`, `"jpeg"`, `"pdf"`, o `"svg"` (por defecto: `"jpg"`)
- `color` (opcional): Color del código QR en formato hexadecimal (por defecto: `"#000000"`)
- `logo` (opcional): Logo en formato base64 data URI para agregar al centro del QR

**Respuesta exitosa:**
```json
{
  "qrCode": "data:image/jpeg;base64,...",
  "size": 500
}
```

**Respuesta con advertencia (si el logo no se pudo procesar):**
```json
{
  "qrCode": "data:image/jpeg;base64,...",
  "size": 500,
  "warning": "No se pudo agregar el logo, se generó el QR sin logo"
}
```

**Errores:**
- `400`: URL es requerida
- `500`: Error generando el código QR

## 🏗️ Estructura del Código

```
Backend/
├── api/
│   └── index.js          # Archivo principal del servidor
├── package.json          # Dependencias y scripts
├── vercel.json          # Configuración para Vercel
└── .env                 # Variables de entorno (no incluido en git)
```

### Funciones principales:

- `addLogoToSVG()`: Agrega un logo a un código QR en formato SVG
- `addLogoToQR()`: Agrega un logo a un código QR en formatos raster (PNG, JPG, PDF)
- `generateQRHandler()`: Maneja la generación del código QR y procesa las opciones

## 🔧 Detalles Técnicos

### Procesamiento de Logos

- Los logos se redimensionan automáticamente para ocupar máximo el 25% del tamaño del QR
- Se mantiene la proporción de aspecto del logo original
- Se agrega un fondo blanco con padding alrededor del logo para mejor legibilidad
- El logo se centra en el código QR

### Formatos Soportados

- **SVG**: Formato vectorial escalable, ideal para web
- **PNG**: Formato raster con transparencia
- **JPG/JPEG**: Formato raster comprimido, ideal para fotografías
- **PDF**: El código QR se genera como imagen PNG dentro de un contexto PDF

### Nivel de Corrección de Errores

Todos los códigos QR se generan con nivel de corrección de errores `H` (High), que permite recuperar hasta el 30% de los datos dañados. Esto es especialmente útil cuando se agregan logos al centro del código.

## 🚢 Despliegue

Este backend está configurado para desplegarse en Vercel. El archivo `vercel.json` contiene la configuración necesaria.

Para desplegar:

1. Asegúrate de tener las variables de entorno configuradas en Vercel
2. Conecta tu repositorio a Vercel
3. El despliegue se realizará automáticamente

## 📝 Notas

- El límite de tamaño del body de las peticiones es de 10MB
- Los logos deben ser imágenes válidas (PNG, JPG, etc.)
- El tamaño recomendado del código QR está entre 200 y 2000 píxeles

## 🤝 Contribución

Si vas a contribuir a este proyecto:

1. Asegúrate de crear tu archivo `.env` con las variables necesarias
2. Sigue las convenciones de código existentes
3. Prueba tus cambios localmente antes de hacer un pull request

Espero que el proyecto crezca y que siga siendo gratis , si me pueden apoyar en mi pagina de Facebook "BigNight" para que siga creciendo la comunidad y haces mas cosas mas adelante 


