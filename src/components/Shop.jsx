import React from 'react'
import { Link } from 'react-router-dom';
import {products} from './ProductCatalog'
export default function Shop(){
    return(
        <>
        <h1>Shop PAGE</h1>
        <h2>items</h2>
        <div className='shop-container'>
        {products.map((item) => {
          return (
            <div className='card' key={item.id}>
              <img src={item.image} alt={item.title} />
              <h5>Title:{item.title}</h5>
              <p>Description: {item.description}</p>
              <Link to={`/item/${item.id}`}>
                <button>View item</button>
              </Link>
            </div>
          );
        })}
        </div>
        </>
    )
}