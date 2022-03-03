import { StartGameStyle, GameCardsContainer } from "./StartGameStyle"
import { Props } from "../../types"  
import React from "react"
import { Link } from "react-router-dom"

const StartGame:React.FC<Props> = ({characters, level,levels,  setLevel}) => {
    
    const chooseLevel = (e:any) => {
        let levelId = e.target.dataset.id
        let currentLevel = levels.find((lev:any) => lev.title===levelId)
        let currentC = characters.find((char:any) => char.level === levelId)
        currentLevel.characters = currentC.characters
        setLevel(currentLevel)
    }
    
    return(
        <StartGameStyle>
            <h1>Choose the level</h1>
            <h2>And find the characters as fast as you can</h2>
            <GameCardsContainer >
                {levels.map((level:any, i:number) => (
                    <Link to='/game' key={i} data-id={level.title}>
                    <div 
                    onClick={chooseLevel}
                    data-id={level.title}
                    key={i} 
                    style={{backgroundImage: `url(${level.img})`}}
                    >

                        <h4 key={i} data-id={level.title}>{level.title}</h4>
                    
                    </div>
                    </Link>
                ))}
            </GameCardsContainer>
        </StartGameStyle>
    )
}

export default StartGame