import React, { useEffect, useState } from "react";
import { Props } from "../../types";
import Dropdown from "../Dropdown/Dropdown";
import { HeaderContainer, ToggleDropdown } from "../Header/HeaderStyle";

import { Link } from "react-router-dom"
import { useStopwatch } from "react-timer-hook"

const GameHeader:React.FC<Props> = ({characters, setTimer, time, start, setStart}) =>{
    //a toggle to open/close the header dropdown
    const [toggleMenu, setToggleMenu] = useState(false)

    const openMenu = () => {
        if (toggleMenu) setToggleMenu(false)
        else setToggleMenu(true)
        
    }


    useEffect(() => {
        let interval:any = null

        if(start) {
            interval = setInterval(()=> {
                setTimer((prevTime: number) => prevTime + 0.01)
            }, 10)
            
        } else {
            setTimer(time)
            clearInterval(interval)
            console.log(time)
        }

        return () => {clearInterval(interval); setTimer(0)}
    }, [start])
    
    return(
        <HeaderContainer onClick={(e:any)=> e.stopPropagation()}>
            <ul >
                <Link to='/' onClick={()=> setStart(true)}>
                    <li>Home</li>
                </Link>
                <li id="Timer">
                    {`${(time).toFixed(3)} s `}
                </li>
                <li>
                    <ToggleDropdown onClick={openMenu}>
                        {characters.length}
                    </ToggleDropdown>
                </li>
            </ul>

            <Dropdown 
                toggleMenu={toggleMenu}
                characters={characters}>
            </Dropdown>
        </HeaderContainer>
    )
}

export default GameHeader