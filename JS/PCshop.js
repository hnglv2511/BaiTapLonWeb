function toggleMenu() {
    const menu = document.getElementById("menu");
    menu.style.display = menu.style.display === "block" ? "none" : "block";
}

function toggleCart() {
    const cart = document.getElementById("cart-dropdown");
    cart.style.display = cart.style.display === "block" ? "none" : "block";
}

function showLoginForm() {
    const LoginPopup = document.getElementById("Login-popup");
    LoginPopup.style.display = "flex";
}

function closeLoginForm() {
    const LoginPopup = document.getElementById("Login-popup");
    LoginPopup.style.display = "none";
}

function toggleDropdown() {
    const dropdown = document.getElementById('dropdownMenu');
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
}


function filterProducts(priceRange) {
    let filteredProducts = [];
    switch (priceRange) {
        case 'under5':
            return product.price < 5000000;
        case '5to10':
            return product.price >= 5000000 && product.price < 10000000;
        case '10to15':
            return product.price >= 10000000 && product.price < 15000000;
        case '15to20':
            return product.price >= 15000000 && product.price < 20000000;
        case 'over20':
            return product.price >= 20000000;
        default:
            return true;
    }
    displayProducts(filteredProducts);
}


function displayProducts(products) {
    const productList = document.getElementById('productList');
    productList.innerHTML = '';

    products.forEach(product => {
        const productItem = document.createElement('div');
        productItem.textContent = `${product.name} - ${product.price.toLocaleString()}₫`;
        productList.appendChild(productItem);
    });
}


window.onclick = function(event) {
    if (!event.target.matches('.filter-button')) {
        document.getElementById('dropdownMenu').style.display = 'none';
    }
}

let cartCount = 0;

function addToCart() {
    cartCount++;
    document.getElementById("cart-count").textContent = cartCount;
}