import React from "react";
import { Div, Title } from '../../../styles/list'
import { Container, ContainerHq, Img, Remove, H2 } from "../../../styles/cartStyles";

function Cart({ cart, onRemoveFromCart }) {
  return (
    <Div>
      <Title>Shopping Cart</Title>
        <Container>        
          {cart.map((item) => (
            <ContainerHq>            
              <h3>{item.title} </h3>
              <Img><img key={item.id}
                    src={`${item.thumbnail.path}.${item.thumbnail.extension}`} 
                    alt={`Foto do ${item.title}`}/></Img>
              <p>Unity price: {(!item.prices[0].price)?"Comic without price...": (item.prices[0].price)}</p>
              <p>Quantity: <span>{item.quantity}</span></p>
              <p>Total: {(!item.prices[0].price)?"Comic without price...": ((item.prices[0].price)*item.quantity)}</p>
              <Remove><button onClick={() => onRemoveFromCart(item)}>Remove</button></Remove>            
            </ContainerHq>
          ))}        
        </Container>
      <H2>Total: ${cart.reduce((total, item) => total + item.prices[0].price * item.quantity, 0).toFixed(2)}</H2>
    </Div>
  );
}

export default Cart;