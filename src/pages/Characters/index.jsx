import React, { useEffect, useState } from 'react'
import api from '../../Services/api'
import { Container } from './sytles'

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

    return(
        <Container>
            <h1>Characters</h1>
            <ul>
                {characters.map(character =>{
                    return(
                        <li key={character.id}>
                            <img 
                            src={`${character.thumbnail.path}.${character.thumbnail.extension}`} 
                            alt={`Foto do ${character.name}`} />
                            <span className="name">
                                {character.name}
                            </span>
                        </li>
                    )
                })}
            </ul>
        </Container>
    )
    
}

export default Characters