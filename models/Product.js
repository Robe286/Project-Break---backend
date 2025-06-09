const mongoose = require('mongoose');

const validSizes = ['xs', 's', 'm', 'l', 'xl'];
const validCategory = ['camisetas', 'pantalones', 'zapatos', 'accesorios'];

const ProductSchema = new mongoose.Schema({
    name: {type: String, required: true},
    description: {type: String},
    image: {type: String},
    category: {type: String, enum: validCategory},
    size: {type: String, enum: validSizes},
    price: {type: Number, min: 0}
}, {timestamps: true})

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;
module.exports.validSizes = validSizes;
module.exports.validCategory = validCategory;

