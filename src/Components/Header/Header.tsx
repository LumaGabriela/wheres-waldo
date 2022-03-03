import React, { useState } from "react";
import { Props } from "../../types";
import { HeaderContainer } from "./HeaderStyle";

import { Link } from "react-router-dom"

const Header:React.FC<Props> = ({characters}) =>{
    //a toggle to open/close the header dropdown
    const [toggleMenu, setToggleMenu] = useState(false)

    const openMenu = () => {
        if (toggleMenu) setToggleMenu(false)
        else setToggleMenu(true)
        
    }

    return(
        <HeaderContainer onClick={(e:any)=> e.stopPropagation()}>
            <ul>
                <Link to='/'><li>Home</li></Link>
                <Link to='/credits'><li>Credits</li></Link>   
                <Link to='/leaderboards'><li>LeaderBoards</li></Link>   
            </ul>

        </HeaderContainer>
    )
}

export default Header