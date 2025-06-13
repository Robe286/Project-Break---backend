function getNavBar(adminAuth) {
    return `
    <header>
        <nav>
            <a href="${adminAuth ? '/dashboard' : '/products'}" style="margin-right: 100px; color: white; font-weight: bolder;">THE FRESH-SHOP</a>
            <a href="${adminAuth ? '/dashboard' : '/products'}">Productos</a>
            <a href="${adminAuth ? '/dashboard?category=camisetas' : '/products?category=camisetas'}">Camisetas</a>
            <a href="${adminAuth ? '/dashboard?category=pantalones' : '/products?category=pantalones'}">Pantalones</a>
            <a href="${adminAuth ? '/dashboard?category=zapatos' : '/products?category=zapatos'}">Zapatos</a>
            <a href="${adminAuth ? '/dashboard?category=accesorios' : '/products?category=accesorios'}">Accesorios</a>
            <a href="/login">Login</a>
            ${adminAuth ? '<a href="/logout">Logout</a>' : ''}
        </nav>
    </header>
    `
}
module.exports = getNavBar;