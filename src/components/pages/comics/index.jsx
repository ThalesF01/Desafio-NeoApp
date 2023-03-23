import React, { useEffect, useState } from 'react'
import api from '../../../services/api'
import { useNavigate } from 'react-router-dom'
import Header from '../../main/header'

//import { Container } from './sytles'

const Comics = () =>{
    const [comics, setComics] = useState([])   
    
    useEffect(()=>{
        api
        .get('/comics')
        .then(response =>{
            console.log(response.data.data.results)
            setComics(response.data.data.results)
           // console.log('Segundo log', comics)
        }) 
        .catch(err => console.log(err))
    }, [])

    let navigate = useNavigate()

    return(
        <>   
        <Header />     
            <h1>Comics</h1>
            <ul>
                {comics.map(comics =>{
                    return(
                        <li key={comics.id} onClick={()=>navigate(`/comics/${comics.id}`)}>
                            <img 
                            src={`${comics.thumbnail.path}.${comics.thumbnail.extension}`} 
                            alt={`Foto do ${comics.name}`} />
                            <span className="name">
                                {comics.name}
                            </span>
                            <span className='title'>
                                {comics.title}
                            </span>
                        </li>
                    )
                })}
            </ul>            
            </>
    )
    
}

export default Comics