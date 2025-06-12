# PROYECT-BREAK_BACKEND

Este proyecto consiste en la elaboración de una API de visualización y gestión de un catálogo de productos.

# Desarrollo a cargo de:

Roberto Blasco Lozano ---> https://github.com/Robe286/Project-Break---backend

# Tienda Online THE FRESH-SHOP

Esta aplicación web rebosa frescura!. Se ha desarrollado para que pueda ser gestionada tanto por el cliente como por el administrador. Node.js, Express y MongoDB son los encargados de darle vida a esta aplicación, generando el dinamismo y la persistencia necesaria para un funcionamiento fluido.

## ¿Cuáles son sus funcionalidades?

- Catálogo de productos organizado por categorías.
- Visualización HTML mediante renderizado SSR, con un diseño fresco e intuitivo.
- API para el consumo de datos en otras aplicaciónes.
- Vistas diferenciadas y orientadas a usuarios y administradores.
- Conexión automática y generación de persistencia con MongoDB Atlas.
- Funcionalidades para la gestión del Stock. Puedes crear nuevos productos, modificarlos o eliminarlos.


- 🔐 Sistema de autenticación para acceder al dashboard.
- 🧾 API REST pública y privada (requiere autenticación).
- ☁️ Subida de imágenes a Cloudinary.
- 🧪 Tests con Jest y Supertest.
- 📚 Documentación Swagger.

---

## 📦 Instalación

1. Lo primero que debes hacer es forkear y clonar el siguiente repositorio alojado en GitHub:

    - En tu terminal escribe:

``` Bash:
git clone https://github.com/Robe286/Project-Break---backend
```

2. Asegurate de instalar las dependencias:

    - Ubicado en la rama MAIN, escribe en tu terminal:

```Bash: 
npm install
```

3. Configura las variables de entorno:

Necesitarás solicitar las variables de entorno. En cualquier caso debes crear un archivo `.env` y ubicarlo en la raíz del proyecto. Debería contener las siguientes variables:

MONGO_URI=
ADMIN_USER=
ADMIN_PASSWORD=

## Inicio de la aplicación

Puedes iniciar la aplicación en modo desarrollo con:

``` Bash
npm run dev
```

También puedes inicializar en modo desarrollo escribiendo:

``` Bash
npm start
```

La aplicación se ejecutará en:  
👉 http://localhost:3000

--------------------------------------------
## Estructura de la API

```
├── config
│   └── db.js
│   └── cloudinary.js
├── controllers
│   ├── productController.js
|   ├── productApiControllers.js
│   └── authController.js
├── models
│   └── Product.js
├── routes
│   ├── productRoutes.js
|   ├── productApiRoutes.js
│   └── authRoutes.js
├── middlewares
|   ├── uploadMiddlewares.js
│   └── authMiddleware.js    
├── helpers
│   ├── baseHtml.js
|   ├── getEditProductForm.js
|   ├── getNavBar.js
│   ├── getProductCards.js
|   ├── getProductDetails.js
│   └── getProductForm.js
├── test
│   ├── productController.test.js
|   └──POST.test.js
├── docs
│   └── swagger.json
├── index.js
├── .env
└── README.md
```

## 🧑‍💼 Acceso al Dashboard (Rutas protegidas)

Para acceder al panel de administración:

1. Accede a `/login`.
2. Usa las credenciales definidas en `.env`:
   - **Usuario**: `ADMIN_USER`
   - **Contraseña**: `ADMIN_PASSWORD`

Una vez logueado podrás:
- Ver todos los productos
- Crear nuevos
- Editarlos o eliminarlos

---

## 🧠 API REST (Bonus)

Puedes acceder a la API en:

```
GET     /api/products
GET     /api/products/:id
POST    /api/products (auth)
PUT     /api/products/:id (auth)
DELETE  /api/products/:id (auth)
```

> Las rutas protegidas requieren autenticación básica.

---

## 🧪 Tests

Para ejecutar los tests automáticos:

```bash
npm test
```

Incluye pruebas unitarias y de integración para los controladores y rutas.

---

## 📚 Documentación Swagger (Bonus)

Una vez ejecutada la app, visita:

```
http://localhost:3000/api-docs
```

Ahí encontrarás toda la documentación interactiva de la API.

---

## 🛠️ Tecnologías Usadas

- Node.js
- Express
- MongoDB + Mongoose
- Cloudinary (subida de imágenes)
- HTML + CSS (SSR)
- Multer (upload middleware)
- Jest + Supertest (tests)
- Swagger (documentación de API)
- Dotenv (variables de entorno)

---

