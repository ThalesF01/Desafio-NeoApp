import styled from 'styled-components'
import 'animate.css';

export const Add = styled.div`
button{
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 6px;
    text-align: center;
    border-radius: .5rem;
    font-size: 1rem;
    transition: all 0.5s;
    padding: 9px;
    background-color: #1e1e23;
    color: #28a745;
    border-color: #28a745;
    @media (max-width: 1000px) {
        padding: 10px;
        width: 5.5rem;
        height: 2.7rem;
    }    
}
& button:hover{
-moz-transform: scale(1.1);
-webkit-transform: scale(1.1);
transform: scale(1.05);
transition: all 0.5s;
cursor: pointer;
background-color: #28a745;
color: #fff;
opacity: 1;
}   
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
    padding: 30px;
    @media (max-width: 1000px) {
        display: flex;
        flex-direction: column;
    }    
`

export const ContainerHq = styled.div`
    background-color: #303038d6;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    padding: 15px;
    height: 73vh;
    width: 78%;
    border-radius:15px;
    animation: zoomIn; /* referring directly to the animation's @keyframe declaration */
    animation-duration: 1s; /* don't forget to set a duration! */
    @media (max-width: 1000px) {
        height:60vh;
        width: 72%;
    }
    @media (max-height:550px ){                
        height: 127vh;
        width: 49%;
    }
    & p{
        font-size: 1.2rem;
        padding: 3px;
    }
`

export const Img = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 60%;
    width: 90%;    
    & img{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 60%;
        height:90%;
        border-radius: 8px;
        margin: 15px;
        transition: all 0.3s; 
        @media (max-width: 1000px) {
        width: 72%;
    }       
    }
    & img:hover{        
        -moz-transform: scale(1.5);
        -webkit-transform: scale(1.5);
        transform: scale(1.05);
    }
`

export const Remove = styled.div`
    & button{
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 6px;
    text-align: center;
    border-radius: .5rem;
    font-size: 1rem;
    transition: all 0.5s;
    padding: 9px;
    background-color: #1e1e23;
    color: #ec0909ef;
    border-color: #ec0909ef;
    @media (max-width: 1000px) {
        padding: 10px;
        width: 5.5rem;
        height: 2.7rem;
    }
    
}
& button:hover{
-moz-transform: scale(1.1);
-webkit-transform: scale(1.1);
transform: scale(1.05);
transition: all 0.5s;
cursor: pointer;
background-color: #ec0909ef;
color: #fff;
opacity: 1;
}  
`

export const H2 = styled.h2`
    background-color: #303038d6;
    font-size: 2rem;
    color: green;
    padding: 15px;
    border-radius: 15px;
    margin: 15px;
    
`