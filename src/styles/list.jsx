import styled from 'styled-components'
import 'animate.css';

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
    grid-template-areas: "center";
     justify-items: center;
     align-items: center;
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
    justify-content: space-evenly;
    background-color: #303038d6;
    width: 90%;
    margin: 50px;
    height: 90vh;  
    border-radius:15px; 
    border-width: 2px;
    border-style: solid;
    border-color: ${(props) => props.border === 'raro' ? 'yellow' : '#303038d6'};
    animation: zoomIn; /* referring directly to the animation's @keyframe declaration */
    animation-duration: 2s; /* don't forget to set a duration! */
    @media (max-width: 1000px) {
        display: flex;
        flex-direction: column;        
        width: 80%;
        height: 70vh;  
    }
    @media (max-height:500px ){                
        height: 115vh;
        width: 52%;
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
    height: 50%;
    width: 80%;    
    & img{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 78%;
        height: 94%;
        border-radius: 8px;
        margin: 15px;
        transition: all 0.3s;   
        @media (max-height:500px ){                
        width: 62%;
        height: 97%;
        }     
        @media (max-width: 1000px) {
        height: 100%;
        width: 80%;
        }
    }
    & img:hover{
        cursor: pointer;
        -moz-transform: scale(1.5);
        -webkit-transform: scale(1.5);
        transform: scale(1.05);
    }
`

export const Pagination = styled.div`
    display: flex;
    flex-direction: row;
    padding: 30px;    
    width: 100%;
    align-items: center;
    justify-content: center;    
    & button{
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 15px;
        width: 10%;
        height: 3rem;
        border-radius: 10px;
        background-color: transparent;
        font-size: 1.5rem;
        color: white;
        border-color: #393941;
        transition-duration: 0.5s; 
        transition-timing-function: ease-in-out;
        @media (max-width:1000px){
            width: 100%;
            padding: 15px;
            margin: 10px;
        }
    }
    & button:hover{
        cursor: pointer;
        background-color: #393941;        
        transform: scale(1.2);
    }
`