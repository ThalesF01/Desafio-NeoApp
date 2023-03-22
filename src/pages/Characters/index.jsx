import React, { useEffect, useState } from 'react'
import api from '../../Services/api'

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

    return <h1>Characters: </h1>
}

export default Characters