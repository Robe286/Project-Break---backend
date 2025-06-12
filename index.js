const express = require('express');
const app = express();
const dbConnection = require('./config/db.js');
const productRouter = require('./routes/productRoutes.js');
const productRouterAPI = require('./routes/productRoutesAPI.js');
const methodOverride = require('method-override');

require('dotenv').config()

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(methodOverride('_method'));

app.use('/', productRouter);
app.use('/api', productRouterAPI);

dbConnection()

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));