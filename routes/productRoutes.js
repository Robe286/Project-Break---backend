const express = require('express');
const router = express.Router();
const Product = require('../models/Product.js');

router.post('/dashboard', async (req, res) => {
    try {
        const product = await Product.create({...req.body});
        res.status(201).send(product);

    } catch (error) {
        res
        .status(500)
        .send({message: 'There was a problem trying to create te product'});
    }
});

module.exports = router;
