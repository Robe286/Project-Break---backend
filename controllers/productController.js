const Product = require('../models/Product.js');

const productController = {
    async showProducts (req, res) {
        try {
            const products = await Product.find();
            const html =  `
                <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>The Chop Shop</title>
                </head>
                <body>
                    <header>
                        <nav>
                            <a href="">Productos</a>
                            <a href="">Camisetas</a>
                            <a href="">Pantalones</a>
                            <a href="">Zapatos</a>
                            <a href="">Accesorios</a>
                            <a href="">Login</a>
                        </nav>
                    </header>
                    <div class="product-home">
                        ${products.map(product => `
                            <div class="product-card"
                                <h2>${product.name}</h2>
                                <img src="${product.image}" alt="${product.name}">
                                <p>${product.price}€</p>
                                <a href="/products/${product._id}">Ver detalle</a>
                            </div>
                        `).join('')}
                    </div>
                </body>
                </html>
            `
            res.send(html)

        } catch (error) {
            console.error(error);
            res
            .status(500)
            .send({message: 'There was a problem trying to show the products'});
        }
    }
}
/*
function baseHtml() {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Chop Shop</title>
    </head>
    <body>
        
    </body>
    </html>
    `
}
*/

/*

function getProductCards(products) {
  let html = '';
  for (let product of products) {
    html += `
      <div class="product-card">
        <img src="${product.image}" alt="${product.name}">
        <h2>${product.name}</h2>
        <p>${product.description}</p>
        <p>${product.price}€</p>
        <a href="/products/${product._id}">Ver detalle</a>
      </div>
    `;
  }
  return html;
}

Con estas funciones auxiliares, el controlador será más limpio y fácil de entender. Ejemplo:

const showProducts = async (req, res) => {
  const products = await Product.find();
  const productCards = getProductCards(products);
  const html = baseHtml + getNavBar() + productCards;
  res.send(html);
};

*/

module.exports = productController;

/*
router.get('/products', async (req, res) => {
    try {
        const products = await Product.find();
        res.status(201).send(products);
    } catch (error) {
        res
        .status(500)
        .send({message: 'There was a problem trying to get the products'});
    }
});
*/