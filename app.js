fetch('./data.json')
  .then(response => response.json())
  .then(data => {
    const productListElement = document.getElementById("productlist");
    data.forEach(product => {
      const productItem = document.createElement("div");
      productItem.innerHTML = `
        <h2>${product.product_name}</h2>
        <p>${product.product_description}</p>
        <p>Price: $${product.product_price}</p>
        <p>Date Added: ${product.product_dateAdded}</p>
        <hr>
      `;
      productListElement.appendChild(productItem);
    });
  })
  .catch(error => console.error('Error fetching data:', error));

