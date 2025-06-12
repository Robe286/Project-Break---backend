function getNavBar() {
    return `
    <header>
        <nav>
            <a href="/products" style="margin-right: 100px; color: white; font-weight: bolder;">THE FRESH-SHOP</a>
            <a href="/products">Productos</a>
            <a href="/products?category=camisetas">Camisetas</a>
            <a href="/products?category=pantalones">Pantalones</a>
            <a href="/products?category=zapatos">Zapatos</a>
            <a href="/products?category=accesorios">Accesorios</a>
            <a href="">Login</a>
        </nav>
    </header>
    `
}
module.exports = getNavBar;