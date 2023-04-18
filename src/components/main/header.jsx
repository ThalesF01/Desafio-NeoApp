import React from "react";
import { Nav, NavContainer, NavMenu, NavItem, NavLink } from "../../styles/mainStyles";
import { useNavigate } from 'react-router-dom'

const Header = () => {

    let navigate = useNavigate() //Rotas

  return (
    <Nav>
      <NavContainer>        
        <NavMenu>
          <NavItem>
            <NavLink href="#" time="5s" onClick={()=>navigate(`/`)}>Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#projetos" time="5.6s" onClick={()=>navigate(`/comics`)}>Comics</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#exp" time="6.2s" onClick={()=>navigate(`/characters`)}>Characters</NavLink>
          </NavItem>                    
        </NavMenu>
      </NavContainer>
    </Nav>
  );
};

export default Header;