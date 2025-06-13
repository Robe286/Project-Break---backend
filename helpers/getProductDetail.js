function getProductDetail(product, adminAuth) {
    return `
        <div class="fresh-logo">
            <a href="/products">
                <img src="https://res.cloudinary.com/dzp5cifta/image/upload/v1749718920/fresh_sin_fondo_osm9iv.png" alt="fresh Logo"
                style="width: 150px; margin-left: 20px;"">
            </a>
        </div>
        <div class="container-detail">
            <div class="product-detail">
                <h1>${product.name}</h1>
                <img src="${product.image}" alt="${product.name}">
                <p><strong>Description:</strong> ${product.description}</p>
                <p><strong>Category:</strong> ${product.category}</p>
                <p><strong>Size:</strong> ${product.size}</p>
                <p><strong>Price:</strong> ${product.price}€</p>
            </div>
            ${adminAuth ? `
                <div class="admin-actions">
                <a href="/dashboard/${product._id}/edit">Editar producto</a>
                <form action="/dashboard/${product._id}/delete?_method=DELETE" method="POST">
                    <button type="submit">Eliminar</button>
                </form>
            </div>    
            ` : ''}
        </div>
    </body>
    </html>
    `
}

module.exports = getProductDetail;

/*
    name: {type: String, required: true},
    description: {type: String},
    image: {type: String},
    category: {type: String, enum: validCategory},
    size: {type: String, enum: validSizes},
    price: {type: Number, min: 0}
*/