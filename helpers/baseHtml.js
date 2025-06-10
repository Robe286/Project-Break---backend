function baseHtml() {
    return `
    <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>The Chop Shop</title>
                    <style>
                        body {
                            font-family: Arial, sans-serif;
                            margin: 0;
                            padding: 0;
                            background-color: #f5f5f5;
                        }
                        header {
                            background-color: #222;
                            color: white;
                            padding: 10px 20px;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            height: 50px;
                        }
                        nav a {
                            color: white;
                            text-decoration: none;
                            margin: 0 30px;
                        }
                        .product-home {
                            display: grid;
                            grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
                            gap: 20px;
                            margin-top: 20px;
                        }
                        .product-card {
                            background: white;
                            padding: 15px;
                            border-radius: 8px;
                            box-shadow: 0 0 10px rgba(0,0,0,0.1);
                            text-align: center;
                        }
                        img {
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