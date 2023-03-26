import styled from 'styled-components'

export const Div = styled.div`
    background-color: #1e1e23;
    color: #fafafa;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;    
    transition: all 0.3s;
    @media (min-width: 1000px) {
        height: 100vh;
    }
`

export const ContainerView = styled.div`
    display: flex;
    background-color: #303038d6;
    width: 80%;
    padding: 1rem;
    border-radius: 15px;
    transition: all 0.3s;
    margin: 40px;
    height: 100%;
    align-items: center;
    justify-content: space-evenly;
    @media (max-width: 1000px) {
        flex-direction: column;
        margin-top: 30px; 
        height: 100%;
    }
`

export const Img = styled.div`    
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s;           
    height: 100%;
    width: 90%;
    @media (max-width: 1000px) {
        height: 400px;
        width: 100%;;        
    }
    & img{
        border-radius: 10px;
        height: 500px;
        width: 70%;       
        @media (max-width: 1000px) {
            width:85%;
            height: 90%;
        }  
    }          
    & img:hover{        
        transform: scale(1.05);
        transition: all 0.3s;       
    }
`

export const Cart = styled.div`
    display: flex;
    
    & button{
        margin: 6px;
        text-align: center;
        border-radius: .5rem;
        font-size: 1rem;
        transition: all 0.5s;
        padding: 10px;
        background-color: #1e1e23;
    }
    & button:hover{
    -moz-transform: scale(1.1);
    -webkit-transform: scale(1.1);
    transform: scale(1.05);
    transition: all 0.5s;
    cursor: pointer;
    }   
    & button:first-child{
        color: #28a745;
        border-color: #28a745;
    }
    & button:last-child{
    color: #ec0909ef;
    border-color: #ec0909ef;
    }
    & button:last-child:hover{
    background-color: #ec0909ef;
    color: #fff;
    opacity: 1;
    }
    & button:first-child:hover{
    background-color: #28a745;
    color: #fff;
    opacity: 1;
    }
`

export const Title = styled.h2`
    font-size: 1.5rem;
`