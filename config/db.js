const mongoose = require('mongoose');
require('dotenv').config()

const dbConnection = async () =>{
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log('Conexión establecida con la BBDD')
    } catch (error) {
        console.log(error);
        throw new Error ('Error a la hora de conectar con la BBDD');
    }
}

module.exports = dbConnection