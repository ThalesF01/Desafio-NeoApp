import React, { useEffect, useState } from 'react'
import api from '../../../services/api'
import Header from '../../main/header'
import { useNavigate } from 'react-router-dom'
import {  Div, Container, ContainerHq, Title, Img } from '../../../styles/list';
import axios from 'axios';

const Comics = () =>{

    const [comics, setComics] = useState([])   

    useEffect(()=>{
        axios
        .get('https://gateway.marvel.com/v1/public/comics')
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