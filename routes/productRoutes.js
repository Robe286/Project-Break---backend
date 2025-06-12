const express = require('express');
const router = express.Router();
const Product = require('../models/Product.js');
const productController = require('../controllers/productController.js');

// ROOT REDIRECT
router.get('/', (req, res) => {
  res.redirect('/products');
});

// PUBLIC ROUTES

router.get('/products', productController.showProducts);
router.get('/products/:_id', productController.showProductById);

// ADMIN ROUTES

router.get('/dashboard', productController.showProducts);
router.get('/dashboard/new', productController.showNewProduct); // Show the new product form
router.post('/dashboard', productController.createProduct);
router.get('/dashboard/:_id', productController.showProductById);
router.get('/dashboard/:_id/edit', productController.showEditProduct); // Show the edit product form
router.put('/dashboard/:_id', productController.updateProduct);
router.delete('/dashboard/:_id/delete', productController.deleteProduct);

module.exports = router;
