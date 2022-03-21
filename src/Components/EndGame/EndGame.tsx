import { Props } from "../../types"
import { EndGameStyle } from "./EndGameStyle"
import {db} from '../../Firebase/config'
import { doc, collection, setDoc, getDoc } from "firebase/firestore"
import { Link } from "react-router-dom"
const EndGame:React.FC<Props> = ({
    level, 
    currentScore, 
    setCurrentScore, 
    toggleScorePopUp, 
    setToggleScorePopUp,
    time
    }) => {
    const sendScore = async () => {
        //only add data if there is no document with this id to prevent changing scores
        const scoreRef = collection(db, 'Leaderboards', level.title, 'scores')
        const docRef = doc(scoreRef, currentScore.user)
        const score = await getDoc(docRef)
        
        if(score.data() === undefined) {
            await setDoc(docRef, currentScore) 
            resetGame()
            window.open('/', '_top')
        }
        else console.log('user already exists')
        
    }
    const getUser = (e:any) => {
        let user = e.target.value
        setCurrentScore({user: user, score: time})
    }
    const resetGame = () => setToggleScorePopUp(false)
        
    
    return(
        <EndGameStyle 
        onClick={(e) => e.stopPropagation()}
        style={{display: `${toggleScorePopUp ? 'flex' : 'none'}`}}
        className="EndGame">
            <h2>Your time: {time.toFixed(3)}s </h2>
            <h4>Submit your score</h4>
            <h4>Username:</h4>

            <input 
            maxLength={20} 
            id="user-input" 
            onKeyDown={(e:any) => e.key === 'Enter' ? sendScore() : null}
            onChange={(e) => getUser(e)} >

            </input>
            <div id="buttons">
                <button id="cancel-btn" 
                onClick={() => {window.open('/wheres-waldo', '_top')}}>Cancel
                </button>
                <button id="submit-btn" onClick={sendScore}>Submit
                </button>
            </div>
        </EndGameStyle>
    )
}

export default EndGame