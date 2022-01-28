import { createContext, useState } from "react";

export const Carts=createContext()

const Context=({children})=>{
  const[cart,setCart]=useState([])
    return(
        <Carts.Provider value={{cart,setCart}}> 
          {children}
        </Carts.Provider>
    )
}

export default Context