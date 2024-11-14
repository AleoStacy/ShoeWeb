import { useState, useEffect } from "react";

const ProductList = () => {
  // State to store products
  const [products, setProducts] = useState([]);

  // Fetch products from the backend when the component mounts
  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error("Error fetching products:", error));
  }, []); 

  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>Price: {product.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
