function baseHtml() {
    return `
    <!DOCTYPE html>
        <html lang="es">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>The Chop Shop</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    margin: 0;
                    padding: 0;
                     background-color: rgba(243, 230, 224, 1);;
                }
                header {
                    background-color: rgba(248, 158, 36, 1);
                    color: rgba(222, 108, 38, 1);
                    padding: 10px 20px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 50px;
                }
                nav a {
                    color: white;
                    font-size: 18px;
                    text-decoration: none;
                    margin: 0 30px;
                }
                .product-home {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
                    gap: 30px;
                    margin-top: 50px;
                    margin-left: 100px;
                    margin-right: 100px;
                    margin-bottom: 50px;
                }
                .product-card {
                    background: white;
                    padding: 20px;
                    border-radius: 8px;
                    box-shadow: 0 0 10px rgba(0,0,0,0.1);
                    text-align: center;
                }
                .container-detail {
                    margin-top: 50px;
                    margin-left: 850px;
                    margin-right: 850px;
                }
                .product-detail {
                    background: white;
                    padding: 15px;
                    border-radius: 8px;
                    box-shadow: 0 0 10px rgba(0,0,0,0.1);
                    text-align: center;
                }
                img {
                    margin-top: 20px;
                    max-width: 100%;
                    height: auto;
                    border-radius: 5px;                
                }
            </style>
                    
        </head>
        <body>
    `
}
module.exports = baseHtml;