function getProductForm(validCategory, validSizes) {
    return `
        <!DOCTYPE html>
        <html lang="en">
            <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>The Chop Shop</title>
            <style>
            </style>
            </head>
        <body>
            <h1>Add New Product</h1>
            <form action="/dashboard" method="POST">
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" required/>

                <label for="image">Image:</label>
                <input type="text" id="image" name="image" required/>
                
                <label for="description">Description:</label>
                <textarea id="description" name="description" required>Add the product description</textarea>
                
                <label for="category">Category:</label>
                <select id="category" name="category" required>
                    <option value="">-- Select Category --</option>
                    ${validCategory.map(category => `<option value="${category}">${category}</option>`).join('')}
                </select>
                
                <label for="size">Size:</label>
                <select id="size" name="size" required>
                    <option value="">-- Choose Size --</option>
                    ${validSizes.map(size => `<option value="${size}">${size}</option>`).join('')}
                </select>
                
                <label for=""price>Price:</label>
                <input type="number" id="price" name="price" min="0" step="0.01" required/>

                <button type="submit">Add Product</button>
            </form>
        </body>
        </html>
    `
};

module.exports = getProductForm;