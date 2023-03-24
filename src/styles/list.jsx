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
    width: 100%;   
    @media (max-width: 1000px) {
        display: flex;
        flex-direction: column;
    }
    
`

export const ContainerHq = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #303038d6;
    width: 90%;
    margin: 15px;
    height: 80vh;  
    border-radius:15px; 
    @media (max-width: 1000px) {
        display: flex;
        flex-direction: column;        
        width: 80%;
        height: 70vh;  
             
    }

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

export const Img = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    height: 65%;
    width: 100%;
    & img{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 78%;
        height: 94%;
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