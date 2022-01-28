import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Carts } from '../Context';
const Header = () => {
  const {cart,setCard}=useContext(Carts)
  return( 
  <div>
    <span>react context api</span>
    <ul>
        <li><Link to="/">home</Link></li>
        <li><Link to="/cart">cart({cart.length})</Link></li>
    </ul>
  </div>
  )
};

export default Header