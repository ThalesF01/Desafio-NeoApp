import styled from 'styled-components';
import 'animate.css';

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  opacity: 1;
  background-color: rgb(22, 22, 29);
  color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 10vh;
  z-index: 1;
`;

export const NavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 960px;
  margin: 0 auto;
  padding: 10px;
  width: 100%;
  @media (max-width:900px){
      width: 96%;
    }
`;

export const NavMenu = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-evenly;
  width: 100%;
`;

export const NavItem = styled.li`
  margin: 0 10px;
  position: relative;
  display: block;
  transition: .5s;
  font-size: 1.3rem;
  @media (max-width:900px){
      margin: 0;
    }
`;

export const NavLink = styled.a`
  color: #fff;
  text-decoration: none;
  transition: all 0.3s ease-in-out;
  padding: 13px;
  animation: fadeIn;
  animation-duration: ${props => props.time};
  
  @media (max-width:900px){
    padding: 10px;
    font-size: 1.1rem;
  }
  :hover{
    letter-spacing: 1.5px;
    border-radius: 15px;
    transform: scale(1.1);
    background-color: #393941;
  }
`;

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
    background-color: #1e1e23;
    height:100vh;
    @media(max-width: 1000px) {
        flex-direction: column;
        justify-content: space-evenly; 
        height:135vh;
        margin-top: 5rem;
    }
    @media (max-height:500px ){
        height: 220vh;
        }
`

export const Img = styled.div`
    margin-top: 25px;
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50%;
    animation: fadeInLeft; /* referring directly to the animation's @keyframe declaration */
    animation-duration: 1.5s; /* don't forget to set a duration! */
    & img{
        width: 80%;
        height: 75vh;
        object-fit: cover;
        border-radius: 10px;
            @media(max-width: 1000px) {
            width: 100%;
            height: 90%;
        }
        @media(max-width: 740px) {
            width: 90%;
            height: 90%;
        }
    }
    @media(max-width: 740px) {
            width: 80%;
            height: 20%;
        }
`

export const Article = styled.article`
    width: 80%; 
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 80%;
    animation: zoomIn; /* referring directly to the animation's @keyframe declaration */
    animation-duration: 3s; /* don't forget to set a duration! */
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