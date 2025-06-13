function getEditProductForm(product, validCategory, validSizes, adminAuth) {
    return `
        <!DOCTYPE html>
        <html lang="es">
            <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>The Fresh-Shop</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    margin: 0;
                    padding: 0;
                    background-color: rgba(243, 230, 224, 1);
                }
                form {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 30px;

                }
                form label {
                    color: rgba(248, 158, 36, 1);
                    font-size: 18px;
                }
                form input, textarea, select {
                    color: black;
                    font-size: 14px;
                    padding: 16px;
                    border-radius: 8px;
                    border: 0px;
                    box-shadow 0 0 10px rgba(0,0,0,0,1);
                    width: 500px;
                }
                h1 {
                    color: rgba(248, 158, 36, 1);
                    text-align: center;
                    margin-bottom: 40px;
                }
                button {
                    color: white;
                    font-size: 18px;
                    background: rgba(248, 158, 36, 1);
                    padding: 16px;
                    border-radius: 8px;
                    border: 0px;
                    box-shadow 0 0 10px rgba(0,0,0,0,1);
                    margin-top: 20px;
                }
            </style>
            </head>
        <header>
            <div class="fresh-logo">
                <a href="${adminAuth ? '/dashboard' : '/products'}">
                    <img src="https://res.cloudinary.com/dzp5cifta/image/upload/v1749718920/fresh_sin_fondo_osm9iv.png" alt="fresh Logo"
                    style="width: 150px; margin-left: 20px;"">
                </a>
            </div>
        </header>
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