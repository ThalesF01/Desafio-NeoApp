import React, { useEffect, useState } from 'react'

import Header from '../../main/header'
import { useNavigate } from 'react-router-dom'
import {  Div, Container, ContainerHq, Title, Img } from '../../../styles/list';
import axios from 'axios';
import md5 from 'md5';

const Comics = () =>{

    const publicKey = 'c35bd6ac7d24ffa9ab6b91748102fc41';
  const privateKey = 'babd4db99c02ee9a5d1bd653484e3c5a6a29da7b';
  const time = Number(new Date())
  const hash = md5(time + privateKey + publicKey);
  

    const [comics, setComics] = useState([])   

    useEffect(()=>{
        axios
        .get(`https://gateway.marvel.com/v1/public/comics?ts=${time}&apikey=${publicKey}&hash=${hash}`)
        .then(response =>{
            console.log(response.data.data.results)
            setComics(response.data.data.results)           
        }) 
        .catch(err => console.log(err))
    }, [])

    let navigate = useNavigate()
    
    return(
        <>   
            <Header />
                    <Div>    
                        <Title>Comics</Title>
                              
                        <Container>         
                            {comics.map(comics =>{  
                                return(  
                                    <ContainerHq>                                                                            
                                        <h2>{comics.title}</h2>
                                        <Img><img 
                                        key={comics.id} onClick={()=>navigate(`/comics/${comics.id}`)}
                                        src={`${comics.thumbnail.path}.${comics.thumbnail.extension}`} 
                                        alt={`Foto do ${comics.title}`} /></Img>
                                        <p>Pages: {(!comics.pageCount)?"No page counts...":(comics.pageCount)}</p>
                                        <p>Price: $ {(!comics.prices[0].price)?"No price...":(comics.prices[0].price)}</p>   
                                    </ContainerHq>                                                                     
                                )                   
                            })}    
                            </Container>                            
                        
                    </Div>             
        </>
    )    
}

export default Comics