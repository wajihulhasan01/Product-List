document.addEventListener('DOMContentLoaded', () => {
    const productList = document.getElementById('product-list');

    fetch('https://dummyjson.com/products')
        .then(response => response.json())
        .then(data => {
            renderProducts(data.products);
        })
        .catch(error => {
            console.error('Error fetching products:', error);
        });

    function renderProducts(products) {
        products.forEach(product => {
            const productItem = document.createElement('div');
            productItem.classList.add('product-item');
            productItem.innerHTML = `
                <h3>${product.title}</h3>
                <p>Price: $${product.price}</p>
                <p>Category:${product.category}</p>
                <p>${product.description}</p>
            `;
            productList.appendChild(productItem);
        });
    }
});
