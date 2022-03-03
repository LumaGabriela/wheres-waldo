import React from "react"
import { Props } from "../../types"
import TipMenuStyle from "./TipMenuStyle"

const TipMenu:React.FC<Props> = ({tipMenu, coords}) => {
    return(
        <TipMenuStyle 
        className="TipMenu"
        style={
            {display: `${tipMenu.show ? 'flex' : 'none'}`,
            top: `${coords.y-100}px`
            }}>
          
            <h4>{tipMenu.value}</h4>
            
        </TipMenuStyle>
    )
}

export default TipMenu