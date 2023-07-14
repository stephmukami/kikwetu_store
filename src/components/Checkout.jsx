import React from 'react';
import {Link} from 'react-router-dom'

export default function Checkout({ selected, onQuantityChange,addToCart, removeFromCart,decreaseAmount,increaseAmount }) {
  console.log('selecteddd:', selected);

  function handleRemove(item) {
    removeFromCart(item.id);
  }

  function handleChange(e, itemId) {
    const { value } = e.target;
    const quantity = parseInt(value) || 0; // Update the quantity based on user input
    onQuantityChange(itemId, quantity);
  }

  function handleDecrease(item){
    decreaseAmount(item)
  }
  function handleIncrease(item){
    increaseAmount(item)
  }

  const shoppedContent = (
    <div className="parent-checkout">
    {selected.map((item) => {
      console.log('item:', item);
      return (
        <div key={item.id} className="checkout-item-container">
          <img src={item.image} alt="" />
          <h5>Title: {item.title}</h5>
          <h5>Quantity: {item.quantity}</h5>
          <h6>Change quantity</h6>
          {/*see if works with no param for callback */}
          <button onClick={() => handleDecrease( item)}>Minus</button>
          <input
            onChange={(e) => handleChange(e, item.id)}
            name="userInput"
            value={item.quantity}
            placeholder="quantity"
          />
          <button onClick={() => handleIncrease( item)} >Plus</button>

          <button onClick={() => handleRemove(item)}>Remove from cart</button>
        <h5>Total: {item.quantity * item.price}</h5>
        </div>
      );
    })}
    <h5>Grand Total:{
      selected
      .reduce((total, item) => {
        return total + item.price * item.quantity;
      }, 0)
      .toFixed(2)}
      
      </h5>
  </div>
  )
  const newShopperContent =(
    <div>
      <h2>No item shopped</h2>
      <Link to="/shop">
        <button>Go Shopping!</button>
    </Link>
    </div>
  )

  return (
    <>
      <h1>CHECKOUT PAGE</h1>
          {
            selected.length>0 ? shoppedContent : newShopperContent 
          }
    </>
  );
}
