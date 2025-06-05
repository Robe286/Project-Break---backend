const express = require('express');
const app = express();
const dbConnection = require('./config/db.js');
const productRouter = require('./routes/productRoutes.js');

require('dotenv').config()

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/', productRouter);

dbConnection()

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));