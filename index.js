const express = require('express');
const app = express();
const dbConnection = require('./config/db.js')

require('dotenv').config()

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({extended: true}))

dbConnection()

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));