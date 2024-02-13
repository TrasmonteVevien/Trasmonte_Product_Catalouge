fetch('data.json')
  .then(response => response.json())
  .then(data => {
    const productListElement = document.getElementById("productlist");
    data.forEach(product => {
      const productItem = document.createElement("div");
      // Adding Bootstrap grid classes
      productItem.classList.add('col-md-4', 'mb-4'); 
      // Initialize click counter for each product
      let clickCount = 0; 
      productItem.innerHTML = `
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">${product.product_name}</h5>
            <p class="card-text">${product.product_description}</p>
            <p class="card-text">Price: $${product.product_price}</p>
            <p class="card-text">Date Added: ${product.product_dateAdded}</p>
            <p class="card-text">Expiration Date: ${product.product_ExpirationDate}</p>
            <button class="btn btn-primary" id="addToCartBtn${product.product_name}" onclick="addToCart('${product.product_name}')">Add to Cart</button>
            <span id="clickCount${product.product_name}">0</span> Clicks
          </div>
        </div>
      `;
      productListElement.appendChild(productItem);
    });
  })
  .catch(error => console.error('Error fetching data:', error));

// Define addToCart function globally
function addToCart(productName) {
  let clickCount = parseInt(document.getElementById(`clickCount${productName}`).innerText);
  clickCount++;
  document.getElementById(`clickCount${productName}`).innerText = clickCount;
}




