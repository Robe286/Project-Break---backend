function getProductDetail(product) {
    return `
        <div class="container-detail">
        <div class="product-detail">
            <h1>${product.name}</h1>
            <img src="${product.image}" alt="${product.name}">
            <p><strong>Description:</strong> ${product.description}</p>
            <p><strong>Category:</strong> ${product.category}</p>
            <p><strong>Size:</strong> ${product.size}</p>
            <p><strong>Price:</strong> ${product.price}€</p>
        </div>
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