const Product = require('../models/Product.js');
const baseHtml = require('../helpers/baseHtml.js');
const getNavBar = require('../helpers/getNavBar.js');
const getProductCards = require('../helpers/getProductCards.js');
const getProductDetail = require('../helpers/getProductDetail.js');

const getProductForm = require('../helpers/getProductForm.js');
const getEditProductForm = require('../helpers/getEditProductForm.js');

const urlFromDashboard = (req) => req.originalUrl.startsWith('/dashboard');

const productController = {
    async showProducts (req, res) {
        try {
            const { category: category } = req.query;
            const filter = category ? {category} : {};
            const products = await Product.find(filter);
            const adminAuth = urlFromDashboard(req);
            const productCards = getProductCards(products, adminAuth);
            const html = baseHtml() + getNavBar(adminAuth) + productCards;
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
            const adminAuth = urlFromDashboard(req);
            const productDetail = getProductDetail(product, adminAuth);
            const html = baseHtml() + productDetail;
            res.send(html);

        } catch (error) {
            console.error(error);
            res
            .status(500)
            .send({message: 'There was a problem trying to show the product details'});
        }
    },

    async createProduct (req, res) {
        try {
            const product = await Product.create({...req.body});
            if(!product) {
                return res.status(404).send({message: 'New product not found'});
            }
            res.redirect('/dashboard')

        } catch (error) {
            console.error(error);
            res
            .status(500)
            .send({message: 'There was a problem creating the product'});
        }
    },

    showNewProduct (req, res) {
        try {
            const adminAuth = urlFromDashboard(req);
            const addProductForm = getProductForm(Product.validCategory, Product.validSizes, adminAuth);
            res.send(addProductForm);

        } catch (error) {
            res
            .status(500)
            .send({message: 'There was a problem trying to show the add product form'});
        }
    },

    async showEditProduct (req, res) {
        try {
            const product = await Product.findById(req.params._id);
            if(!product) {
                return res.status(404).send({message: 'New product not found'});
            }
            const editProductForm = getEditProductForm(product, Product.validCategory, Product.validSizes);
            res.send(editProductForm);

        } catch (error) {
            res
            .status(500)
            .send({message: 'There was a problem trying to show the edit product form'});
        }
    },

    async updateProduct (req, res) {
        try {
            const product = await Product.findByIdAndUpdate(req.params._id, {...req.body}, {new: true});            
            if (!product) {
                return res.status(404).send({message: 'Product not found'})
            };
            res.redirect('/dashboard');

        } catch (error) {
            res
            .status(500)
            .send({message: 'There was a problem trying to update the product'});
        }
    },

    async deleteProduct (req, res) {
        try {
            const product = await Product.findByIdAndDelete(req.params._id);
            if (!product) {
                return res.status(404).send({message: 'Product not found'});
            }
            res.redirect('/dashboard');

        } catch (error) {
            res
            .status(500)
            .send({message: 'There was a problem trying to delete de product'});
        }
    }
};

module.exports = productController;