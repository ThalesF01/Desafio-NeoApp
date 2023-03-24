import React, { useEffect, useState } from 'react'
import api from '../../../services/api'
import Header from '../../main/header'
import { useNavigate } from 'react-router-dom'
import {  Div, Container, ContainerHq, Title} from '../../../styles/list';

const Comics = () =>{

    const [comics, setComics] = useState([])   

    useEffect(()=>{
        api
        .get('/comics')
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
                        <ul>       
                        <Container>         
                            {comics.map(comics =>{  
                                return(  
                                    <ContainerHq>                      
                                    <a >
                                        <h2>{comics.title}</h2>
                                        <img 
                                        key={comics.id} onClick={()=>navigate(`/comics/${comics.id}`)}
                                        src={`${comics.thumbnail.path}.${comics.thumbnail.extension}`} 
                                        alt={`Foto do ${comics.title}`} />                                                        
                                        
                                        <p>Pages: {(!comics.pageCount)?"No page counts...":(comics.pageCount)}</p>
                                        <p>Price: $ {(!comics.prices[0].price)?"No price...":(comics.prices[0].price)}</p>
                                    </a> 
                                    </ContainerHq>                                                                     
                                )                   
                            })}    
                            </Container>                            
                        </ul>
                    </Div>             
        </>
    )    
}

export default Comics