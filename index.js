const express = require('express');
const app = express();
const dbConnection = require('./config/db.js');
const productRouter = require('./routes/productRoutes.js');
const productRouterAPI = require('./routes/productRoutesAPI.js');
const authRouter = require('./routes/authRoutes.js');
const methodOverride = require('method-override');
const session = require('express-session');

require('dotenv').config()

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(methodOverride('_method'));

// Eliminar _method del req.body. Evitar interferir con el manejo posterior del cuerpo

app.use(methodOverride((req, res) => {
  if (req.body && typeof req.body === 'object' && '_method' in req.body) {
    const method = req.body._method;
    delete req.body._method;
    return method;
  }
  return null;
}));

app.use(session({
    secret: process.env.SESSION_SECRET || 'mi-clave-secreta',
    resave: false,
    saveUninitialized: false
}))

app.use('/', authRouter);
app.use('/', productRouter);
app.use('/api', productRouterAPI);

dbConnection()

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));