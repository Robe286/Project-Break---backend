const Product = require('../models/Product.js');
const baseHtml = require('../helpers/baseHtml.js');
const getNavBar = require('../helpers/getNavBar.js');
const getProductCards = require('../helpers/getProductCards.js')

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
    }
}

module.exports = productController;