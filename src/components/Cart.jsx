import React, { useState } from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { Carts } from '../Context';
import Single from './Single';

const Cart = () => {
   const{cart,setCart}=useContext(Carts)

   const [total,setTotal]=useState()
    useEffect(()=>{
       setTotal(cart.reduce((acc,curr)=>acc+Number(curr.price),0))
    },[cart])
  return( 
  <div>
    <h1>Cart</h1>
    <h2><b>total:{" "}{total}</b></h2>
    <div>
       {cart.map((prod)=>(
           <Single key={prod.id} prod={prod} cart={cart} setCart={setCart}/>
       ))}
    </div>
  </div> 
)};

export default Cart;
