import styled from 'styled-components'

export const Nav = styled.nav`
    display: flex;
    background-color: #16161d; 
    height: 15vh;
    align-items: center;
    justify-content: center;
`

export const Lista = styled.li`
    list-style: none;    
    padding: 0.5rem;
`

export const Ul = styled.ul`
    display: flex;
    flex-direction: row;    
    align-items: center;
    justify-content: space-around;
    width: 50%;
    padding: 0.5rem;
`

export const Link = styled.a`
    font-size: 1.7rem;
    transition-duration: 0.5s; 
    transition-timing-function: ease-in-out;
    padding: 0.6rem;
    color: #fafafa; 
    &:hover{
        cursor: pointer;  
        opacity: 0.7;  
        letter-spacing: 1.5px;
        border-radius: 15px;
        transform: scale(1.1);
        background-color: #393941;         
    }
`

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 85vh;
    background-color: #1e1e23;
    @media(max-width: 1000px) {
        flex-direction: column;   
        justify-content: space-evenly;     
        height: 92vh;
    }
    @media(max-width: 740px) {
        height: 85vh;
        justify-content: space-evenly;
        }
`

export const Img = styled.div`
    margin-top: 25px;
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: center;       
    height: 50%;
    
    & img{
        width: 80%;
        height: 75vh;
        object-fit: cover;
        border-radius: 10px;
            @media(max-width: 1000px) {
            width: 100%;
            height: 55vh;
        }
        @media(max-width: 740px) {
            
            width: 100%;
            height: 100%;            
        }
    }
`

export const Article = styled.article`
    width: 80%;    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;    
    & p{
        color: #fafafa;
        letter-spacing: 0.7px;
        line-height: 1.5;
        font-size: 1.2rem;        
        margin: 1rem;
        @media(max-width: 1000px) {
            width: 100%;                       
        }
    }
`

export const Title = styled.h1`
    color: #b60202;
    font-size: 3.5rem;
    font-weight: 900;
    font-family: sans-serif;
    margin-top: 15px;
` 