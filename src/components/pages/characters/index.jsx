import React, { useEffect, useState } from 'react'
import api from '../../../services/api'
import Header from '../../main/header'
import { useNavigate } from 'react-router-dom'
import { Div, Container, ContainerHq, Title } from '../../../styles/list'

const Characters = () =>{

    const [characters, setCharacters] = useState([])   
    
    useEffect(()=>{
        api
        .get('/characters')
        .then(response =>{
            //console.log(response.data.data.results)
            setCharacters(response.data.data.results)            
        }) 
        .catch(err => console.log(err))
    }, [])

    let navigate = useNavigate()

    return(
        <>   
            <Header/>     
                <Div>
                    <Title>Characters</Title>
                        
                            <Container>
                                {characters.map(characters =>{
                                    return(
                                        <ContainerHq>                                
                                            <h2>{characters.name} </h2>
                                            <img 
                                            key={characters.id} onClick={()=>navigate(`/characters/${characters.id}`)}
                                            src={`${characters.thumbnail.path}.${characters.thumbnail.extension}`} 
                                             alt={`Foto do ${characters.name}`} />                                                                                                
                                        </ContainerHq>
                                        )
                                    })}
                            </Container> 
                        
                </Div>            
        </>
    )    
}

export default Characters