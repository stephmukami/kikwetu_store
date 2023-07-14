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
        <button>Proceed to Checkout</button>
    </Link>
    )
    return(
        <>
        <h1>Item PAGE</h1>
        <h3>Item {id}</h3>
        <div key={item.id} className='item-continer'>
            <img src={item.image} alt="" />
            <p> Title: {item.title}</p>
            <p> Description: {item.description}</p>
            <button onClick={handleAddtoCart}>Add to cart</button>
           {showCheckout?checkoutBtn:null}
           <Link to="/shop">
        <button>Back</button>
    </Link>
        </div>
        </>
    )
}