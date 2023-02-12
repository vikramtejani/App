import { useState } from 'react';

function Product() {
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(10);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
    setPrice(price + 10);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      setPrice(price - 10);
    }
  };

  return (
    <div>
      <h2>Product Name</h2>
      <p>Price: PKR{price.toFixed(2)}</p>
      <p>Quantity: {quantity}</p>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
    </div>
  );
}


export default Product;