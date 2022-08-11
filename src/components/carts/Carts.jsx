import React from 'react'
import Cart from '../cart/Cart'
import { Link } from 'react-router-dom'

import "./carts.scss";

const Carts = props => {

  
  return (
    <div className="carts">
        {
            props.item.map(i => (
                <Cart 
                id={i.num} key={i.id}>
                  <Link to={i.id}>more...</Link>
                </Cart>
            ))
        }
    </div>
  )
}

export default Carts