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
- Interpretación de login. Dashboard de gestión de contenido para administradores.

## Tecnologías usadas

- Node.js
- Express
- Dotenv
- Mongoose + MongoDB
- Cloudinary
- SSR de HTML y estilos CSS

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

MONGO_URI =
ADMIN_USER =
ADMIN_KEY = 
SESSION_SECRET =

## Inicio de la aplicación

La aplicación se iniciará en http://localhost:3000, utilizando el comando de node:

```Bash
npm start
```

## Uso como administrador de las rutas protegidas (Dashboard)

1. Accede a la ruta `/login`.
2. Introduce el usuario y la contraseña definidas en el archivo `.env`:
    - ADMIN_USER
    - ADMIN_KEY
3. Además de ver todos los productos, después de la autenticación tendrás la posibilidad de añadir productos nuevos, modificar los ya existentes e incluso eliminarlos.

## Uso de la API REST

Estas son las rutas definidas para poder acceder a los productos y sus detalles. Podrás consumirlos accediendo a las siguientes rutas:

END POINT : http://localhost:3000

Completar el end point para obtener los datos:

- Obtener todos los productos: `/api/products` ---> GET
- Para obtener los datos de un producto: `/api/products/:_id` ----> GET
- Añadir un producto nuevo (con autenticación): `/api/products` ---> POST
- Modificar un producto (con autenticación): `/api/products/:_id` ---> PUT
- Eliminar un producto(con autenticación): `/api/products/:id` ---> DELETE