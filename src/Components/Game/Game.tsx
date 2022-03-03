import React, { useEffect, useState } from "react"

import { Props } from '../../types'
import GameImage from '../GameImage'
import MainSection from "./GameStyle"
import GameHeader from "../GameHeader/GameHeader"
import EndGame from "../EndGame/EndGame"
import { doc, getDoc } from "firebase/firestore"
import { db } from "../../Firebase/config"

import GameMenu from "../GameMenu/GameMenu"
import TipMenu from "../TipMenu/TipMenu"

const Game:React.FC<Props> = ({ 
    level, 
    setLevel, 
    setTimer, 
    time, 
    start, 
    setStart,
    setToggleScorePopUp,
    toggleScorePopUp,
    currentScore,
    setCurrentScore
    }) => {
    //absolute coords from the screen
    const [gameCoords, setGameCoords] = useState({x:0, y:0})
    //relative coords in % considering the screen
    const [relCoords, setRelCoords] = useState({relX: 0, relY:0})
    //client's dimension in pixels
    const [clientDimensions, setClientDimensions] = useState({clientX:0, clientY: 0})
    //gets the image coords and defines the relative coords

    const [toggle, setToggle] = useState(false) 
    const [tipMenu, setTipMenu] = useState({value:'', show:false})
    const toggleDropdown = (e:any) => {
        if(toggleScorePopUp) e.stopPropagation()
        else {
        if (toggle) setToggle(false)
        else setToggle(true)}
    }

    const GetImageCoords = async (e:any)  => {
        if(toggleScorePopUp) e.stopPropagation()
        else {
            let {pageX: x, pageY: y} = e
            let {offsetWidth: clientX, offsetHeight: clientY} =e.target

            y = y-50
            clientY = clientY- 50

            let relX = Math.floor(x*100/clientX)
            let relY = Math.floor(y*100/clientY)

            setGameCoords({x,y})
            setClientDimensions({clientX, clientY})
            setRelCoords({relX, relY})
            console.log(relX, relY)
        }
    }
    //
    const [playableCharacters, setPCharacters] = useState(level.characters)
    useEffect(() => setPCharacters(level.characters.filter((char:any) => char.found === false)),[level.characters])
    //Verify if the selecter character is in the correct x and y coords according to firebase firestore
   
    const verifyCharacterPosition = async (lvl:string, char:string, x:number, y:number) => {
        let currentLevel = JSON.parse(JSON.stringify(level))
        // get document with the characters info in firebase
        const docRef = doc(db, 'Levels', lvl)
        const docSnap = await getDoc(docRef)
        let info = docSnap.data()
        let cc = JSON.parse(JSON.stringify(info))
        cc = cc.characters
        // extract coords and change the found attribute 
        let i = currentLevel.characters.findIndex((item:any) => item.name === char)
        cc = cc.find((item:any) => item.name === char)
        let ccoords = {x:cc.xvalues, y:cc.yvalues}
        // check if the character was found or not
        if(ccoords.x.includes(x)  && ccoords.y.includes(y)) {
            currentLevel.characters[i].found = true
            setLevel(currentLevel)
            setTipMenu({value: `You found ${char}`, show: true})

            setTimeout(() => setTipMenu({value: `You found ${char}`, show: false})
            , 6000)
        }
        else {
            setTipMenu({value: `That's not ${char}`, show: true})
            setTimeout(() => setTipMenu({value: `That's not ${char}`, show: false})
            , 6000)
        }
           
    }
    
    const verifyGameResult = () => {
        let lvl = JSON.parse(JSON.stringify(level))
        const result = lvl.characters.every((char:any) => char.found === true)
       
        if (result) resetGame()
    }
    const resetGame = () => {
        let newGame = JSON.parse(JSON.stringify(level))
        let newChars = newGame.characters
        for (let c of newChars) c.found = false
        newGame.characters = newChars
        setLevel(newGame)
        setStart(false)
        setToggleScorePopUp(true)
    }

    useEffect(() => verifyGameResult() , [level])
    return (
        <MainSection className="Main" onClick={toggleDropdown}>
           
            <GameHeader 
                characters={playableCharacters}
                setTimer={setTimer}
                time={time}
                start={start}
                setStart={setStart}
            />

            <GameMenu
                characters={playableCharacters} 
                level={level}
                toggle={toggle}
                coords={gameCoords}
                rcoords={relCoords}
                clientDimensions={clientDimensions}
                verifyCharacterPosition={verifyCharacterPosition}  
            />

            <GameImage 
                onClick={GetImageCoords} 
                alt='GameImage' 
                src={level.img}
            />

            <EndGame
                level={level}
                setToggleScorePopUp={setToggleScorePopUp}
                toggleScorePopUp={toggleScorePopUp}
                time={time}
                currentScore={currentScore}
                setCurrentScore={setCurrentScore}
                
            />
            <TipMenu
                tipMenu={tipMenu}
                coords={gameCoords}
            />
            
        </MainSection>

    )
}

export default Game