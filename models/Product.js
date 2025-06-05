const mongoose = require('mongoose');

const validSizes = ['XS', 'S', 'M', 'L', 'XL'];
const validCategory = ['Camisetas', 'Pantalones', 'Zapatos', 'Accesorios'];

const ProductSchema = new mongoose.Schema({
    nombre: {type: String, required: true},
    descripcion: {type: String, required: true},
    imagen: {type: String, required: true},
    categoria: {type: String, enum: validCategory, required: true},
    talla: {type: String, enum: validSizes, required: true},
    precio: {type: Number, required: true, min: 0}
}, {timestamps: true})

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;
module.exports.validSizes = validSizes;
module.exports.validCategory = validCategory;

