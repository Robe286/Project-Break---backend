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
            <div class="admin-actions">
                <a href="/dashboard/${product._id}/edit">Edit</a>
                <form action="/dashboard/${product._id}/delete?_method=DELETE" method="POST">
                    <button type="submit">Delete</button>
                </form>
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