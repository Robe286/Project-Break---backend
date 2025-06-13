function getLoginForm (adminAuth) {
    return `
    <!DOCTYPE html>
        <html lang="es">
        <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>The Fresh-Shop</title>
        <style>
                body {
                    font-family: Arial, sans-serif;
                    margin: 0;
                    padding: 0;
                    background-color: rgba(243, 230, 224, 1);
                }
                form {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 30px;

                }
                form label {
                    color: rgba(248, 158, 36, 1);
                    font-size: 18px;
                }
                form input, textarea, select {
                    color: black;
                    font-size: 14px;
                    padding: 16px;
                    border-radius: 8px;
                    border: 0px;
                    box-shadow 0 0 10px rgba(0,0,0,0,1);
                    width: 500px;
                }
                h1 {
                    color: rgba(248, 158, 36, 1);
                    text-align: center;
                    margin-bottom: 40px;
                }
                button {
                    color: white;
                    font-size: 18px;
                    background: rgba(248, 158, 36, 1);
                    padding: 16px;
                    border-radius: 8px;
                    border: 0px;
                    box-shadow 0 0 10px rgba(0,0,0,0,1);
                    margin-top: 20px;
                }
        </style>
        </head>
        <header>
            <div class="fresh-logo">
                <a href="${adminAuth ? '/dashboard' : '/products'}">
                    <img src="https://res.cloudinary.com/dzp5cifta/image/upload/v1749718920/fresh_sin_fondo_osm9iv.png" alt="fresh Logo"
                    style="width: 150px; margin-left: 20px;"">
                </a>
            </div>
        </header>
        <body>
            <div class="admin-auth">
                <h1>Autenticación</h1>
                <form method="POST" action="/login">
                    <label for="user">Usuario</label>
                    <input type="text" name="user" required>
                    <label for="password">Contraseña</label>
                    <input type="password" name="password" required>
                    <button>Iniciar Sesión</button>
                </form>
            </div>
        </body>
        </html>
    `
}
module.exports = getLoginForm;