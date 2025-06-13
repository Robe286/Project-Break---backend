const Product = require('../models/Product');

const controllerApi = {
    async showProducts (req, res) {
        try {
        const products = await Product.find();
        if(!products) {
            res.status(404).send({message: 'Product not found'});
        };
        res.json(products);

        } catch (error) {
            res
            .status(500)
            .send({message: 'There was a problem trying to get the product detail'});
        }
    },
    async showProductById (req, res) {
        try {
        const product = await Product.findById(req.params._id);
        res.json(product);

        } catch (error) {
            res
            .status(500)
            .send({message: 'There was a problem trying to get the product detail'});
        }
    },
    async createProduct (req, res) {
        try {
        const product = await Product.create({...req.body});
        if(!product) {
            res.status(404).send({message: 'Product not found'});
        };
        res.status(200).json(product);

        } catch (error) {
            res
            .status(500)
            .send({message: 'There was a problem trying to create te product'});
        }
    },
    async updateProduct (req, res) {
        try {
        const product = await Product.findByIdAndUpdate(req.params._id, {...req.body}, {new: true});            
        if (!product) {
            return res.status(404).send({message: 'Product not found'})
        };
        res.status(200).json(product)

        } catch (error) {
            res
            .status(500)
            .send({message: 'There was a problem trying to update the product'});
        }
    },
    async deleteProduct (req, res) {
        try {
            const product = await Product.findByIdAndDelete(req.params._id)
            if (!product) {
                return res.status(404).send({message: 'Product not found'});
            }
            res.json({message: 'Delete was complete'});
            
        } catch (error) {
            res
            .status(500)
            .send({message: 'There was a problem trying to delete de product'});
        }
    }
}
module.exports = controllerApi;

/*

router.delete('/dashboard/:_id/delete', async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params._id)
        if (!product) {
            return res.status(404).send({message: 'Product not found'});
        }
        res.status(200).send({message: 'Delete was complete'});
    } catch (error) {
        res
        .status(500)
        .send({message: 'There was a problem trying to delete de product'});
    }
});

*/