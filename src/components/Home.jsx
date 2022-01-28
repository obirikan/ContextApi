import faker from '@faker-js/faker';
import { useState,useContext } from 'react';
import {Carts} from '../Context'
import Single from './Single';


faker.seed(100)
const Home = () => {
   
  console.log(useContext(Carts))
    const productsArray=[...Array(20)].map(()=>({
        id:faker.datatype.uuid(),
        name:faker.commerce.productName(),
        price:faker.commerce.price(), 
        image:faker.random.image()
    }))
   
    // const [cart,setCart]=useState([])
    const[products]=useState(productsArray)
  return (
  <div>
    <h1>Home</h1>
    <div>{products.map((prod)=>(
             <Single prod={prod}  key={prod.id} />
             ))}</div>
  </div>
)
};

export default Home;
