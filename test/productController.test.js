const express = require('express');
const request = require('supertest');
const Product = require('../models/Product');
const {
    showProducts, 
    showProductById,
    createProduct,
    updateProduct,
    deleteProduct,
    showNewProduct,
    showEditProduct
} = require('../controllers/productController');

jest.mock('../models/Product');