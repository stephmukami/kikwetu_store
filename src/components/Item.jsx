import React from 'react'
import {useState} from 'react'
import { useParams,Link} from 'react-router-dom'
export default function Item({products,addtoCart}){
    const [showCheckout,setshowCheckout] = useState(false)
    const {id} = useParams()
    const item = products[id-1]

    function handleAddtoCart(){
        addtoCart(item) //change the id? 
        setshowCheckout(true)
        console.log('item added')
    }
    const checkoutBtn = (
        <Link to="/checkout">
        <button className='checkout-btn'>Proceed to Checkout</button>
    </Link>
    )
    return(
        <>
        <div className='ittem'>
        <h4  className='tagline'>Checkout the product !!</h4>
        <div key={item.id} className='item-parent'>

            <div className='item-image'>
                 <img src={item.image} alt="" />
            </div>

            <div className='item-text'>
                    <p className='item-title'>  {item.title}</p>
                    <p className='item-desc'>{item.description}</p>

                    <div className='item-btns'>
                            <button className='add-btn' onClick={handleAddtoCart}>Add to cart</button>
                                {showCheckout?checkoutBtn:null}
                            <Link to="/shop">
                                    <button className='item-back-btn'>Back</button>
                            </Link>
                    </div>
               
            </div>

        </div>
        </div>
        </>
    )
}