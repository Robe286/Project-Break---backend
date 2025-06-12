function getProductCards (products) {
    return `
        <div class="fresh-logo">
            <a href="/products">
                <img src="https://res.cloudinary.com/dzp5cifta/image/upload/v1749718920/fresh_sin_fondo_osm9iv.png" alt="fresh Logo"
                style="width: 150px; margin-left: 20px;">
            </a>
        </div>
        <div class="add-product">
            <a href="/dashboard/new">Añade mas productos</a>
        </div>
        <div class="product-home">
            ${products.map(product => `
                <div class="product-card"
                    <h2><strong>${product.name}</strong></h2>
                    <img src="${product.image}" alt="${product.name}">
                    <p style="margin-bottom: 30px">${product.price}€</p>
                    <a href="/products/${product._id}" style="color: white; font-size: 18px; background: rgba(248, 158, 36, 1);
                    padding: 16px; border-radius: 8px; box-shadow 0 0 10px rgba(0,0,0,0,1); text-decoration: none;">Ver detalle</a>
                </div>
            `).join('')}
        </div>
    </body>
    </html>
    `
}
module.exports = getProductCards;