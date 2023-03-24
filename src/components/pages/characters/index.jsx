import React, { useEffect, useState } from 'react'
import api from '../../../services/api'
import { useNavigate } from 'react-router-dom'
import Header from '../../main/header'
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
            <h1>Characters</h1>
            <ul>
                {characters.map(characters =>{
                    return(
                        <li key={characters.id} onClick={()=>navigate(`/characters/${characters.id}`)}>
                            <img 
                            src={`${characters.thumbnail.path}.${characters.thumbnail.extension}`} 
                            alt={`Foto do ${characters.name}`} />
                            <span className="name">
                                {characters.name}
                            </span>
                            <span className='title'>
                                {characters.title}
                            </span>
                        </li>
                    )
                })}
            </ul>            
            </>
    )
    
}

export default Characters