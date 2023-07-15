import React from 'react'
import { Link } from 'react-router-dom';
export default function Navbar(){
    return(
        <>
        <div className='navbar'>

        <ul>
            <div>
              <li>
              <Link to="/">Home</Link>
            </li>
            </div>
          
            <div>
              <li>
              <Link to="/shop">Shop</Link>
            </li>
            </div>
          
          <div>
            <li>
              <Link to="/checkout">Checkout</Link>
            </li>
          </div>
         
          
      </ul>


            
        </div>
        </>
    )
}