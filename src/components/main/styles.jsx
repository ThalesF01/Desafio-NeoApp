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
        color: #fafafa; 
    }

`