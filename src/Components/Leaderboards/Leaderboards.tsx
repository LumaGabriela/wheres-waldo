import { Props } from "../../types"
import LeaderboardsStyle from "./LeaderboardsStyle"
import { db } from "../../Firebase/config"
import { getDocs, collection } from "firebase/firestore"
import { useEffect, useState } from "react"
import Header from "../Header/Header"

const Leaderboards:React.FC<Props> = () => {

    const [score, setScore] = useState([])
    const [level, setLevel] = useState('ps1')
    
    const fetchDocs = async (levelName:any) => {
        const colRef = collection(db, 'Leaderboards', levelName, 'scores')
        const docs = await getDocs(colRef)
        let list:any
        list = []
        docs.forEach((doc:any) => {
            let obj = JSON.parse(JSON.stringify(doc.data()))
            list.push(obj)
        })

        list.sort((a:any, b:any) => a.score - b.score)
        setScore(list)
    }

    useEffect( () => {
        fetchDocs(level)
    }, [level])
    return(
        <LeaderboardsStyle>
            <Header/>
            <h1 id='title'>Leaderboards</h1>
            <div id="buttons">
                <button id="ps1" onClick={() => (setLevel('ps1'))}>PS1</button>
                <button id="ps2" onClick={() => (setLevel('ps2'))}>PS2</button>
                <button id="ps3" onClick={() => (setLevel('ps3'))}>PS3</button>
                <button id="ps4" onClick={() => (setLevel('ps4'))}>PS4</button>
                <button id="gamecube" onClick={() => (setLevel('gamecube'))}>Gamecube</button>
                <button id="n64" onClick={() => (setLevel('n64'))}>N64</button>
                <button id="wii" onClick={() => (setLevel('wii'))}>WII</button>
                <button id="xbox" onClick={() => (setLevel('xbox'))}>XBOX</button>
                <button id="xbox360" onClick={() => (setLevel('xbox360'))}>XBOX<br/>360</button>
            </div>

            <div id="scores">
                <h1 id={level}>{level.toUpperCase()}</h1>
                <table>
                    <tbody>
                    <tr>
                        <th>Nº</th>
                        <th>USER</th>
                        <th>SCORE(SECONDS)</th>
                    </tr>  
                    
                        {score.map((item:any, i:number) => (
                        <tr key={i}>
                            <td>{i+1}</td>
                            <td>{item.user}</td>
                            <td>{item.score.toFixed(4)}</td>
                        </tr> 
                        ))}
                     </tbody>
                </table>
            </div>
        </LeaderboardsStyle>
    )
}

export default Leaderboards