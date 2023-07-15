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
          <div className='checkout-img'>
              <img src={item.image} alt="" />
          </div>
          
          <div className='checkout-text'>
                <h5>Item: {item.title}</h5>
                <h5>Quantity: {item.quantity}</h5>
                <h5 className='change'>Change quantity</h5>
                {/*see if works with no param for callback */}
                <div className='checkout-btns'>
                <div className='quantity-btns'>
                <svg onClick={() => handleDecrease( item)} className=' svg-minus' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>minus-circle</title><path d="M17,13H7V11H17M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" /></svg>
                    
                    <input
                      onChange={(e) => handleChange(e, item.id)}
                      name="userInput"
                      value={item.quantity}
                      placeholder="quantity"
                    />
                     <svg onClick={() => handleIncrease( item)} className= 'svg-add ' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>plus-circle</title><path d="M17,13H13V17H11V13H7V11H11V7H13V11H17M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" /></svg>

                 
                 </div>
               
                  <div className='checkout-remove'>
                      <button onClick={() => handleRemove(item)}>Remove from cart</button>
                  </div>
                </div>

       

              <h5 className='item-total'>Total: {item.quantity * item.price} Ksh</h5>
              
          </div>
        
        </div>
      );
    })}
    <h5 className='grand-total'> 💵 Grand Total : {
      selected
      .reduce((total, item) => {
        return total + item.price * item.quantity;
      }, 0)
      .toFixed(2) }
      Ksh 💵
      </h5>
  </div>
  )
  const newShopperContent =(
    <div className='new-shopper'>
      <h2>No item shopped 😔</h2>
      <Link to="/shop">
        <button>Go Shopping!</button>
    </Link>
    </div>
  )

  return (
    <>
    <div>
    <h1 className='checkout-title'>CHECKOUT PAGE 🎪</h1>
    
    </div>
          {
            selected.length>0 ? shoppedContent : newShopperContent 
          }
    </>
  );
}
