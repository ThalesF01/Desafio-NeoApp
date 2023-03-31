import React, { useEffect, useState } from 'react'
import Header from '../../main/header'
import axios from 'axios';
import Product from '../cart/product';
import Cart from '../cart/cart';
import { useNavigate } from 'react-router-dom'
import { Div, Container, ContainerHq, Title, Img, Pagination } from '../../../styles/list';
import { publicKey, time, hash } from '../../../inf/keys';

const Comics = () =>{

const [comics, setComics] = useState([])

    useEffect(()=>{
        axios
        .get(`https://gateway.marvel.com/v1/public/comics?ts=${time}&apikey=${publicKey}&hash=${hash}&limit=45`)
        .then(response =>{
            setComics(response.data.data.results)
        })
        .catch(err => console.log(err))
    }, [])

  let navigate = useNavigate()
    

  // Pagination  
  const [itensPerPage, setItensPerPage] = useState(9)             //itens por pagina
  const [currentPage, setCurrentPage] = useState(0)               //pagina atual

  const page = 5                                                  //total de paginas
  const startIndex = currentPage * itensPerPage
  const endIndex = startIndex + itensPerPage
  const currentItens = comics.slice(startIndex, endIndex)

  
  // Cart
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
  };

  const removeFromCart = (itemToRemove) => {
    setCart(cart.filter((item) => item.id !== itemToRemove.id));
  };
  

  //Classification
  const [items, setItems] = useState([]);

   useEffect(() => {
    const commonItems = Array(8).fill("comum");
    const rareItems = Array(1).fill("raro");

    const allItems = [...commonItems, ...rareItems].sort(() => Math.random() - 0.5);
    setItems(allItems);
  }, []);

    return(
        <>
          <Header />
            <Div>
              <Title>Comics</Title>
                <Container>
                  {currentItens.map((comics, index) =>{                                                                                            
                    return(
                      <ContainerHq border={items[index]}>
                        <h2>{comics.title}</h2>
                        <h2>{items[index] == "raro" ? "Rare edition" :"" }</h2>
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