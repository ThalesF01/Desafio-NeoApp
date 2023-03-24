import React, { useEffect, useState } from 'react'
import api from '../../../services/api'
import { useNavigate } from 'react-router-dom'
import Header from '../../main/header'
import { Div, Container, ContainerHq, Title } from '../../../styles/list'
//import { Container } from './sytles'

const Characters = () =>{
    const [characters, setCharacters] = useState([])   
    
    useEffect(()=>{
        api
        .get('/characters')
        .then(response =>{
            console.log(response.data.data.results)
            setCharacters(response.data.data.results)
            console.log('Segundo log', characters)
        }) 
        .catch(err => console.log(err))
    }, [])

    let navigate = useNavigate()

    return(
        <>   
            <Header/>     
                <Div>
                    <Title>Characters</Title>
                    <ul>
                    <Container>
                        {characters.map(characters =>{
                            return(
                                <ContainerHq>
                                <a >
                                    <h2>{characters.name} </h2>
                                    <img 
                                    key={characters.id} onClick={()=>navigate(`/characters/${characters.id}`)}
                                    src={`${characters.thumbnail.path}.${characters.thumbnail.extension}`} 
                                    alt={`Foto do ${characters.name}`} />                                                                
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

export default Characters