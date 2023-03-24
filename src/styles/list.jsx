import styled from 'styled-components'

export const Div = styled.div`
    background-color: #1e1e23;
    color: #fafafa;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
`
export const Title = styled.h1`
    margin-top: 15px;
`

export const Container = styled.div`
    display: grid;    
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap:1.5rem;
    align-items: center;
    justify-content: center;
    transition: all 0.3s;
    & img{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 280px;
        height: 330px;
        border-radius: 8px;
        margin: 15px;
        transition: all 0.3s;
        
    }
    & img:hover{
        cursor: pointer;
        -moz-transform: scale(1.5);
        -webkit-transform: scale(1.5);
        transform: scale(1.05);
    }
`

export const ContainerHq = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #303038d6;
    width: 60vh;
    margin: 15px;
    height: 80vh;  
    border-radius:15px; 
    & h2{
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.3rem;
        margin: 20px;            
    }
    & p {
        margin: 5px;
        font-size: 1.1rem;
    }
`