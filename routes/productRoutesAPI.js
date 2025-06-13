const express = require('express');
const router = express();
const productControllerAPI = require('../controllers/productControllerAPI');

router.get('/products', productControllerAPI.showProducts);
router.get('/products/:_id', productControllerAPI.showProductById);
router.post('/products', productControllerAPI.createProduct);
router.put('/products/:_id', productControllerAPI.updateProduct);
router.delete('/products/:_id', productControllerAPI.deleteProduct);

module.exports = router;