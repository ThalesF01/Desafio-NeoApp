import React from "react";
import { useNavigate } from 'react-router-dom'

export default function Header(){

    let navigate = useNavigate()

    return(        
        <div className="header">
            <ul className="lista">
                <li><a onClick={()=>navigate(`/`)}>Home</a></li>           
                <li><a onClick={()=>navigate(`/comics`)}>Comics</a></li>
                <li><a onClick={()=>navigate(`/characters`)}>Characters</a></li>
            </ul>            
        </div>                    
    )
}