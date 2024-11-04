// Task 2: Fetch Products from the API Using Fetch and Promises
function fetchProducts() {
    fetch('https://www.course-api.com/javascript-store-products')
        .then(response => {
            
            if (!response.ok) {
                throw new Error('Network response was not ok: ') 
            } })
        .then(data => {
            displayProducts(data); 
        })
        .catch(error => {
            console.error('Error fetching products:', error);
            document.getElementById('product-container').innerHTML = '<p>Error loading products. Please try again later.</p>';
        });
}

// Task 3: Display Product Details Dynamically
function displayProducts(products) {
    const container = document.getElementById('product container');
    
    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');

        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <h2>${product.name}</h2>
            <h3>${product.company}</h3>
            <h4>${product.price}</h4>
        `;
        
    });
}