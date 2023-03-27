import React, { useEffect, useState,  } from 'react'
import Header from '../../main/header'
import { useNavigate } from 'react-router-dom'
import { Div, Container, ContainerHq, Title, Img, Pagination } from '../../../styles/list'
import axios from 'axios'
import md5 from 'md5'

const Characters = () =>{

const publicKey = 'c35bd6ac7d24ffa9ab6b91748102fc41';
const privateKey = 'babd4db99c02ee9a5d1bd653484e3c5a6a29da7b';
const time = Number(new Date());
const hash = md5(time + privateKey + publicKey);

const [characters, setCharacters] = useState([])
    
useEffect(()=>{
    axios
    .get(`https://gateway.marvel.com/v1/public/characters?ts=${time}&apikey=${publicKey}&hash=${hash}&limit=30`)
    .then(response =>{
        setCharacters(response.data.data.results)
    })
    .catch(err => console.log(err))
    }, [])

let navigate = useNavigate()

const [itensPerPage, setItensPerPage] = useState(6)   //itens por pagina
const [currentPage, setCurrentPage] = useState(0)     //pagina atual

const page = 5                                        //total de paginas
const startIndex = currentPage * itensPerPage
const endIndex = startIndex + itensPerPage
const currentItens = characters.slice(startIndex, endIndex)

    return(
        <>
            <Header/>
                <Div>
                    <Title>Characters</Title>
                            <Container>
                                {currentItens.map(characters =>{
                                    return(
                                        <ContainerHq>
                                            <h2>{characters.name} </h2>
                                            <Img><img 
                                            key={characters.id} onClick={()=>navigate(`/characters/${characters.id}`)}
                                            src={`${characters.thumbnail.path}.${characters.thumbnail.extension}`} 
                                             alt={`Foto do ${characters.name}`} /></Img>
                                        </ContainerHq>
                                        )
                                    })}
                            </Container>
                            <Pagination>
                    {Array.from(Array(page), (characters, index)=>{
                        return <button value={index} onClick={(e) => setCurrentPage(Number(e.target.value))}>
                                    {index+1}
                                </button>
                        })}
                        </Pagination>
                </Div>
        </>
    )
}

export default Characters