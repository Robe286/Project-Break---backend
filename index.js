const express = require('express');
const app = express();
const dbConnection = require('./config/db.js')

const PORT = process.env.PORT || 3000;

dbConnection()

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));