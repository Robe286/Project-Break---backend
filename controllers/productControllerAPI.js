const Product = require('../models/Product');

const controllerApi = {
    async showProducts (req, res) {
        try {
        const product = await Product.find();
        res.json(product);
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
        res.json(product);
        } catch (error) {
            res
            .status(500)
            .send({message: 'There was a problem trying to create te product'});
        }
    }
}
module.exports = controllerApi;

/*

// ADMIN ROUTES

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


router.get('/dashboard', async (req, res) => {
    try {
        const products = await Product.find();
        res.status(201).send(products);
    } catch (error) {
        res
        .status(500)
        .send({message: 'There was a problem trying to show the admin dashboard'});
    }
});

/* ---- Ruta para mostrar el formulario para subir un producto nuevo ----
router.get('/dashboard/new', async (req, res) => {
    try {
        const uploadForm = await 
    } catch (error) {
        res
        .status(500)
        .send({message: 'There was a problem trying to show the upload product Form'})
    }
})


router.get('/dashboard/:_id', async (req, res) => {
    try {
        const product = await Product.findById(req.params._id);
        res.status(201).send(product);
    } catch (error) {
        res
        .status(500)
        .send({message: 'There was a problem trying to show the product detail in the admin dashboard'});
    }
});

/* ---- Ruta para obtener el formulario de edición de un producto ya creado ----
router.get('/dashboard/:_id/edit', async (req, res) => {
    try {
        const editForm = 
    } catch (error) {
        res
        .status(500)
        .send({message: 'There was a problem trying to show the edit product form'});
    }
});


router.put('/dashboard/:_id', async (req, res) => {
    try {
        const product = await Product.findByIdAndUpdate(
            req.params._id,
            {
                nombre: req.body.nombre,
                descripcion: req.body.descripcion,
                imagen: req.body.imagen,
                categoria: req.body.categoria,
                talla: req.body.talla,
                precio: req.body.precio
            });            
        if (!product) {
            return res.status(404).send({message: 'Product not found'})
        };
        res.status(200).send(product)

    } catch (error) {
        res
        .status(500)
        .send({message: 'There was a problem trying to update the product'});
    }
});

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