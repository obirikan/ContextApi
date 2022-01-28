import React from 'react';
import { useContext } from 'react';
import { Carts } from '../Context';

const Single = ({prod}) => {
 const {cart,setCart}=useContext(Carts)
  return (
  <div>
    <div style={{
        border:'1px solid grey',
        margin:20,
        width:300,
        }}> 
        <img src={prod.image} alt=""  style={{width:200}}/>
        <h2>{prod.name}</h2>
        <h4>{prod.price.substring(0,3)}</h4>
        {cart.includes(prod)?(
          <button onClick={()=>{
            setCart(cart.filter((c)=>
                c.id !== prod.id
            ))
           }}>remove from cart</button>
         ):(
            <button onClick={()=>{
                setCart([...cart,prod])
            }}>add to cart</button>
        )}
    
    </div>
    
  </div>
  )};

export default Single;
