import React, { useEffect, useState } from "react"
import { Props } from '../../types'

import {GameMenuStyle, AimContainer} from "./GameMenuStyle"

const GameMenu:React.FC<Props> = ({
    level,
    characters, 
    toggle, 
    verifyCharacterPosition,
    clientDimensions, 
    coords,
    rcoords}) => {
    // coords => pixel co0rds onscreen
    //rcoords => percentage coords onscreen
    const relativeDimensions = ( 
        max:number, 
        rel:number,
        direction:string) => {
        switch(direction){
            case 'x':if (rel >= (max -224)) return `${max -224}`
            else return rel
            
            case 'y': if (rel >= (max -176)) return `${rel -176}`
            else return rel + 100
        }
    }
    
    return (
        <div>

        < AimContainer
        style={ 
            {top:`${coords.y+5}px`,
            left:`${coords.x -45}px`,
            display: `${toggle ? 'block' : 'none' }` }}
        ></AimContainer>

        <GameMenuStyle 
            style={ 
            {top:`${relativeDimensions(clientDimensions.clientY, coords.y, 'y')}px`,
            left:`${relativeDimensions(clientDimensions.clientX, coords.x, 'x')}px`,
            display: `${toggle ? 'block' : 'none' }`,
            height: `${(11/3)*characters.length}rem`
        }
        }>
            

            {characters.map((char:any, i:number)=> {
                return (
                <div 
                onClick={() => verifyCharacterPosition(level.title, char.name, rcoords.relX, rcoords.relY)} 
                data-cname={char.name} 
                key={i}>

                    {char.name}
                </div>
                )
            })}
            
        </GameMenuStyle>
        </div>
    )
}

export default GameMenu