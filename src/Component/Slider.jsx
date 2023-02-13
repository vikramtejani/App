import React, { useContext, useState, useReducer, useEffect } from 'react'

const Slider = () => {

  const product = [
    { name: "Apple", price: 10, unit: 1 },
    { name: "Banana", price: 20, unit: 1 },
    { name: "Cherry", price: 30, unit: 1 }
  ]

  const [total, setTotal] = useState(0)
  const [qty, setQty] = useState(1)

  const handleClick = e => {
    // setTotal(prevState => prevState + e.price),
      setQty(e.unit + 1)
    console.log(e)
  };

  return (
    <div>
      {product.map((p) =>
        <li key={p.name}>{p.name}{p.price}
          <button onClick={() => handleClick(p)}>Add to cart </button>
          &nbsp;{qty}

        </li>)
      }
      Price: {total}

    </div>
  )
}

export default Slider;


