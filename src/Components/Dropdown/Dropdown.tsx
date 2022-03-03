import React from "react"
import { Props } from '../../types'
import DropdownStyle from "./DropdownStyle"

const Dropdown:React.FC<Props> = ({characters, toggleMenu}) => {
    return (
        <DropdownStyle style={
            {
                height:`${100*characters.length}px`,
            top: `${toggleMenu ? '50px' : '-16.7rem'}`
            }
            }>
            {characters.map((char:any, i:number)=> {
                return (
                <div key={i} id='container'>
                    <div id="details">
                        <h3>{char.name}</h3> 
                        <span>from: {char.from}</span>
                    </div>
                    
                    <img alt={char.name} src={char.img}></img>
                </div>
                )
            })}
            
        </DropdownStyle>

    )
}

export default Dropdown