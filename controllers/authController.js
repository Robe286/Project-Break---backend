require('dotenv').config();

const showLoginForm = (req, res) => {
    const form = `
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
    `
    res.send(form);
};

const login = (req, res) => {
    if (req.body.user === process.env.ADMIN_USER && req.body.password === process.env.ADMIN_KEY) {
        req.session.isValid = true;
        res.redirect('/dashboard');
    } else {
        res
        .redirect('/login?error=Usuario y/o contraseña invalidos');
    }
};

const logout = (req, res) => {
    req.session.destroy(() => res.redirect('/login'));
};


module.exports = {
    showLoginForm,
    login,
    logout
};