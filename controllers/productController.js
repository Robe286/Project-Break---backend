const Product = require('../models/Product.js');
const baseHtml = require('../helpers/baseHtml.js');
const getNavBar = require('../helpers/getNavBar.js');
const getProductCards = require('../helpers/getProductCards.js');
const getProductDetail = require('../helpers/getProductDetail.js');
const getProductForm = require('../helpers/getProductForm.js');

const productController = {
    async showProducts (req, res) {
        try {
            const products = await Product.find();
            const productCards = getProductCards(products);
            const html = baseHtml() + getNavBar() + productCards;
            res.send(html)

        } catch (error) {
            console.error(error);
            res
            .status(500)
            .send({message: 'There was a problem trying to show the products'});
        }
    },

    async showProductById (req, res) {
        try {
            const product = await Product.findById(req.params._id);
            if(!product) {
                return res.status(404).send({message: 'Product not found'})
            }
            const productDetail = getProductDetail(product);
            const html = baseHtml() + productDetail;
            res.send(html);

        } catch (error) {
            console.error(error);
            res
            .status(500)
            .send({message: 'There was a problem trying to show the products details'});
        }
    },
/*
    async createProduct (req, res) {
        try {
            const product = await Product.create(...req.body);
            const html =
        } catch (error) {
            console.error(error);
            res
            .status(500)
            .send({message: 'There was a problem trying to create the product'});
        }
    },
*/
    async showNewProduct (req, res) {
        try {
            const addProductForm = getProductForm(Product.validCategory, Product.validSizes);
            res.send(addProductForm);

        } catch (error) {
            res
            .status(500)
            .send({message: 'There was a problem trying to show the add product form'});
        }
    }
}

module.exports = productController;