import React, { useState } from "react";
import { Add } from '../cart/cartStyles';

function Product({ product, onAddToCart }) {    

  return (    
      <Add><button onClick={() => onAddToCart(product)}>Add to Cart</button></Add>
  );
}

export default Product;