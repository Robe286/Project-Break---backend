const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController.js');
const authentication = require('../middlewares/authMiddleware.js');


// PUBLIC ROUTES

router.get('/', productController.showProducts);
router.get('/products', productController.showProducts);
router.get('/products/:_id', productController.showProductById);

// ADMIN ROUTES

router.get('/dashboard', authentication, productController.showProducts);
router.get('/dashboard/new', authentication, productController.showNewProduct); // Show the new product form
router.post('/dashboard', authentication, productController.createProduct);
router.get('/dashboard/:_id', authentication, productController.showProductById);
router.get('/dashboard/:_id/edit', authentication, productController.showEditProduct); // Show the edit product form
router.put('/dashboard/:_id', authentication, productController.updateProduct);
router.delete('/dashboard/:_id/delete', authentication, productController.deleteProduct);

module.exports = router;
