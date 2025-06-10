function getProductCards (products) {
    return `
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
}
module.exports = getProductCards;