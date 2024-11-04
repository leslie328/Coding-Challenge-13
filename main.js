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

