import React, { useState } from 'react';

function ProductList() {
  const [products, setProducts] = useState([
    { id: 1, name: 'Apple',  image:'https://vignette.wikia.nocookie.net/fruits-information/images/2/2b/Apple.jpg/revision/latest?cb=20180802112257' , price: 1},
    { id: 2, name: 'Mango',  image:'https://tse2.mm.bing.net/th?id=OIP.oF_MAEvQrR9iHLU4h_dGKgHaHa&pid=Api&P=0', price: 30 },
    { id: 3, name: 'Banana', image:'https://tse2.mm.bing.net/th?id=OIP.ioarRCmwW9gJgTP3khksxAHaEx&pid=Api&P=0', price: 30 }
  ]);
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
    <>
    <div>
      <h2>Product Name</h2>
      <p>Price: PKR{price.toFixed(2)}</p>
      <p>Quantity: {quantity}</p>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
    </div>
    <div className="product-list" style={{display:'flex' ,textAlign:'center'}}>
      {products.map(product => (
        <div key={product.id} className="product">
          <h2>{product.name}</h2>
          <img style={{ width: '200px', height: '200px' }} src={product.image } alt={product.name} />
          <p>{product.price}</p>
        </div>
      ))}
    </div>
    </>
  );
}

export default ProductList;
