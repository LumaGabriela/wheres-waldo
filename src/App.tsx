import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Global from './global'
// Character images
import Game from './Components/Game/Game'

import worm from './imgs/worm.png'
import luigi from './imgs/luigi.png'
import banjo from './imgs/banjo.png'

import samus from './imgs/samus.png'
import link from './imgs/link.png'
import boo from './imgs/boo.png'

import donkey from './imgs/donkeykong.png'
import mario from './imgs/mario.png'
import rayman from './imgs/rayman.png'

import ryuninja from './imgs/ryuninja.png'
import cj from './imgs/cj.png'
import orta from './imgs/orta.png'

import niko from './imgs/niko.png'
import bdb from './imgs/bdb.png'
import marcus from './imgs/marcusfenix.png'

import lara from './imgs/lara.png'
import crash from './imgs/crash.png'
import leon from './imgs/leon.png'

import dante from './imgs/dante.png'
import legolas from './imgs/legolas.png'
import james from './imgs/james.png'

import cole from './imgs/cole.png'
import joelEllie from './imgs/joelEllie.png'
import sackboy from './imgs/sackboy.png'

import twob from './imgs/2b.png'
import spiderman from './imgs/spiderman.png'
import ryustreet from './imgs/ryustreet.png'

// Game images
import n64 from './imgs/pierre-roussel-n64-phone2.jpg'
import wii from './imgs/pierre-roussel-wii-phone1.jpg'
import ps1 from './imgs/pierre-roussel-ps1phone2.jpg'
import ps2 from './imgs/pierre-roussel-ps2-phone1.jpg'
import ps3 from './imgs/pierre-roussel-ps3-phone1.jpg'
import ps4 from './imgs/pierre-roussel-ps4-phone1.jpg'
import gamecube from './imgs/pierre-roussel-gamecube-phone1-indigo.jpg'
import xbox from './imgs/pierre-roussel-xbox-phone1.jpg'
import xbox360 from './imgs/pierre-roussel-xbox360-phone1.jpg'
//                  //                  //               //
import StartGame from './Components/StartGame/StartGame'
import Header from './Components/Header/Header'
import Leaderboards from './Components/Leaderboards/Leaderboards'
import Credits from './Components/Credits/Credits'

function App() {

  const [characters, setCaracters] = useState([
    {
      level: 'n64', 
      characters: [
        {name:"Worm", from: 'Worms',found: false, img: worm},
        {name:"Luigi", from: 'Super Mario',found: false, img: luigi},
        {name:"Banjo", from: 'Banjo Kazooie',found: false, img: banjo}
      ]
    },
    {
      level: 'gamecube', 
      characters: [
        {name:"Samus", from: 'Super Metroid',found: false, img: samus},
        {name:"Link", from: 'Legend Of Zelda',found: false, img: link},
        {name:"Boo", from: 'Super Mario',found: false, img: boo}
      ]
    },
    {
      level: 'wii', 
      characters: [
        {name:"Mario", from: 'Super Mario',found: false, img: mario},
        {name:"Donkey Kong", from: 'Donkey Kong',found: false, img: donkey},
        {name:"Rayman", from: 'Rayman Legends',found: false, img: rayman}
      ]
    },
    {
      level: 'xbox', 
      characters: [
        {name:"Ryu", from: 'Ninja Gaiden',found: false, img: ryuninja},
        {name:"CJ", from: 'GTA',found: false, img: cj},
        {name:"Orta", from: 'Panzer Dragoon',found: false, img: orta}
      ]
    },
    {
      level: 'xbox360', 
      characters: [
        {name:"Niko", from: 'GTA',found: false, img: niko},
        {name:"Big Daddy Bouncer", from: 'Bioshock',found: false, img: bdb},
        {name:"Marcus Fenix", from: 'Gears Of War',found: false, img: marcus}
      ]
    },
    {
      level: 'ps1', 
      characters: [
        {name:"Lara Croft", from: 'Tomb Raider',found: false, img: lara},
        {name:"Crash", from: 'Crash Bandicoot',found: false, img: crash},
        {name:"Leon Kennedy", from: 'Resident Evil',found: false, img: leon}
      ]
    },
    {
      level: 'ps2', 
      characters: [
        {name:"Dante", from: 'Devil May Cry',found: false, img: dante},
        {name:"Legolas", from: 'Lord Of the Rings',found: false, img: legolas},
        {name:"James Sunderland", from: 'Silent Hill',found: false, img: james}
      ]
    },
    {
      level: 'ps3', 
      characters: [
        {name:"Cole MacGrath", from: 'Infamous',found: false, img: cole},
        {name:"Joel and Ellie", from: 'The Last Of Us',found: false, img: joelEllie},
        {name:"Sackboy", from: 'Little Big Planet',found: false, img: sackboy}
      ]
    },
    {
      level: 'ps4', 
      characters: [
        {name:"2B", from: 'Nier Automata',found: false, img: twob},
        {name:"Spider Man", from: 'Spider Man',found: false, img: spiderman},
        {name:"Ryu", from: 'Street Fighter',found: false, img: ryustreet}
      ]
    }
])

  const [levels, setLevels] = useState([
    {title: 'xbox', img: xbox},
    {title: 'xbox360', img: xbox360},
    {title: 'ps1', img: ps1},
    {title: 'ps2', img: ps2},
    {title: 'ps3', img: ps3},
    {title: 'ps4', img: ps4},
    {title: 'n64', img: n64},
    {title: 'wii', img: wii},
    {title: 'gamecube', img: gamecube}
  ])
  
  const [level, setLevel] = useState({})
  const [currentScore, setCurrentScore] = useState({})
  const [scores, setScores] = useState({})
  const [time, setTimer] = useState(0)
  const [start, setStart] = useState(true)
  const [toggleScorePopUp, setToggleScorePopUp] = useState(false)
  return (
    <div className='App'>
        <Global/>
        <Router basename='/wheres-waldo'>
          <Header />

          <Routes>
            <Route path='/game'
              element={<Game 
              characters={characters}
              level = {level}
              setLevel={setLevel}

              setTimer={setTimer}
              time={time}
              start={start}
              setStart={setStart}

              toggleScorePopUp={toggleScorePopUp}
              setToggleScorePopUp={setToggleScorePopUp}
              currentScore={currentScore}
              setCurrentScore={setCurrentScore}
              />}
            />

            <Route path='/'
              element={<StartGame
              characters={characters}
              setLevel={setLevel}
              levels={levels}
              level = {level}/>}
            
            />
            <Route path='/leaderboards'
              element={<Leaderboards
              />}
            />
            <Route path='/credits'
              element={<Credits
              />}
            />

            
          </Routes>

      </Router>
    </div>
    
    
  );
}




export default App;
