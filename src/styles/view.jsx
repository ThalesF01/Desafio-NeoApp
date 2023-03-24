import styled from 'styled-components'

export const Div = styled.div`
    background-color: #1e1e23;
    color: #fafafa;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 85vh;
    transition: all 0.3s;    
`

export const ContainerView = styled.div`
    display: flex;
    background-color: #303038d6;
    width: 80%;
    padding: 1rem;
    border-radius: 15px;
    transition: all 0.3s;
    margin: 20px;
    height: 100%;
`

export const Img = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s;
    & img{
        width: 70%;
        height: 70vh;
        border-radius: 10px;
    }& img:hover{        
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