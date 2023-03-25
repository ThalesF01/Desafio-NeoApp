import React, { useEffect, useState, useContext } from 'react'
import Header from '../../main/header'
import { useNavigate } from 'react-router-dom'
import {  Div, Container, ContainerHq, Title, Img, Pagination } from '../../../styles/list';
import axios from 'axios';
import md5 from 'md5';
import { CartContext } from '../../../contexts/CartContext';
import Product from '../cart/product';
import Cart from '../cart/cart';



const Comics = () =>{
    const publicKey = 'c35bd6ac7d24ffa9ab6b91748102fc41';
    const privateKey = 'babd4db99c02ee9a5d1bd653484e3c5a6a29da7b';
    const time = Number(new Date())
    const hash = md5(time + privateKey + publicKey);

    const [comics, setComics] = useState([])   

    useEffect(()=>{
        axios
        .get(`https://gateway.marvel.com/v1/public/comics?ts=${time}&apikey=${publicKey}&hash=${hash}&limit=30`)
        .then(response =>{
            console.log(response.data.data.results)
            setComics(response.data.data.results)           
        }) 
        .catch(err => console.log(err))
    }, [])

    let navigate = useNavigate()
    
    const [itensPerPage, setItensPerPage] = useState(6)
    const [currentPage, setCurrentPage] = useState(0)

    const page = 5
    const startIndex = currentPage * itensPerPage
    const endIndex = startIndex + itensPerPage
    const currentItens = comics.slice(startIndex, endIndex)

    const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const item = cart.find((item) => item.id === product.id);
    if (item) {
      setCart(
        cart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
    console.log(`Carrinho aqui ${cart}`)
  };

  const removeFromCart = (itemToRemove) => {
    setCart(cart.filter((item) => item.id !== itemToRemove.id));
  };

    return(
        <>   
        
            <Header />            
                    <Div>                        
                        <Title>Comics</Title>                              
                                   
                        
                            <Container>         
                                {currentItens.map(comics =>{                                                                        
                                    return(  
                                        
                                        <ContainerHq>                                                                                                                                                                                                            
                                            <h2>{comics.title}</h2>
                                            <Img><img 
                                            key={comics.id} onClick={()=>navigate(`/comics/${comics.id}`)}
                                            src={`${comics.thumbnail.path}.${comics.thumbnail.extension}`} 
                                            alt={`Foto do ${comics.title}`} /></Img>
                                            <p>Pages: {(!comics.pageCount)?"No page counts...":(comics.pageCount)}</p>
                                            <p>Price: $ {(!comics.prices[0].price)?"No price...":(comics.prices[0].price)}</p> 
                                           
                                            <Product product={comics} onAddToCart={addToCart} />                                                                           
                                        </ContainerHq>                                                                     
                                    )                   
                                })}    
                            </Container>     
                            
                            <Pagination>    
                        {Array.from(Array(page), (comics, index)=>{
                            return <button value={index} onClick={(e) => setCurrentPage(Number(e.target.value))}>
                                        {index+1}
                                    </button>
                        })}
                        </Pagination>                   

                        <Cart cart={cart} onRemoveFromCart={removeFromCart} />
                                                        
                    </Div>             
        </>
    )    
}

export default Comics