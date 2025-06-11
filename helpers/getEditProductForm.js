function getEditProductForm(product, validCategory, validSizes) {
    return `
        <!DOCTYPE html>
        <html lang="es">
            <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>The Chop Shop</title>
            <style>
            </style>
            </head>
        <body>
            <h1>Edit Product</h1>
            <form action="/dashboard/${product._id}?_method=PUT" method="POST">
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" value="${product.name}" required/>

                <label for="image">Image:</label>
                <input type="text" id="image" name="image" value="${product.image || ''}" required/>
                
                <label for="description">Description:</label>
                <textarea id="description" name="description" required>${product.description || ''}</textarea>
                
                <label for="category">Category:</label>
                <select id="category" name="category" required>
                    <option value="">-- Select Category --</option>
                    ${validCategory.map(category => `
                        <option value="${category}" ${category === product.category ? 'selected' : ''}>${category}</option>`).join('')}
                </select>
                
                <label for="size">Size:</label>
                <select id="size" name="size" required>
                    <option value="">-- Choose Size --</option>
                    ${validSizes.map(size => `
                        <option value="${size}" ${size === product.size ? 'selected' : ''}>${size}</option>`).join('')}
                </select>
                
                <label for=""price>Price:</label>
                <input type="number" id="price" name="price" min="0" step="0.01" value="${product.price || 0}" required/>

                <button type="submit">Update product</button>
            </form>
        </body>
        </html>
    `
};

module.exports = getEditProductForm;