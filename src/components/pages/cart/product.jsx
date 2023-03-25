import React, { useState } from "react";
import { Add } from '../cart/styles';



function Product({ product, onAddToCart }) {

    

    const [contador, setContador] = useState(0);

    function aumentarContador() {
        setContador(contador + 1);   
        
        //console.log(`Aqui contador ${contador}`)
        //console.log(`Aqui ${price}`)
        
        
      }

  return (
    
      <Add><button onClick={() => {
        onAddToCart(product); 
        setContador(contador+1)}}>Add to Cart</button></Add>
    
  );
}

export default Product;