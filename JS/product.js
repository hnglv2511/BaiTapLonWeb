const products = [
    { name: 'Sản phẩm 1', price: 3000000 },
    { name: 'Sản phẩm 2', price: 8000000 },
    { name: 'Sản phẩm 3', price: 12000000 },
    { name: 'Sản phẩm 4', price: 18000000 },
    { name: 'Sản phẩm 5', price: 25000000 },
];

// Hàm để chuyển đổi menu lọc giá
function toggleDropdown() {
    const dropdown = document.getElementById('dropdownMenu');
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
}

// Hàm để lọc sản phẩm theo khoảng giá
function filterProducts(priceRange) {
    const filteredProducts = products.filter(product => {
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
    });

    displayProducts(filteredProducts);
}

// Hàm để hiển thị sản phẩm
function displayProducts(products) {
    const productList = document.getElementById('productList');
    productList.innerHTML = ''; // Xóa nội dung hiện tại

    products.forEach(product => {
        const productItem = document.createElement('div');
        productItem.textContent = `${product.name} - ${product.price.toLocaleString()}₫`;
        productList.appendChild(productItem);
    });
}

// Đóng menu khi nhấp ra ngoài
window.onclick = function(event) {
    if (!event.target.matches('.filter-button')) {
        document.getElementById('dropdownMenu').style.display = 'none';
    }
}