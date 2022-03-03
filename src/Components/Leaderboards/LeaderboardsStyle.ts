import styled from "styled-components"

const LeaderboardsStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    background: #222430;
    color: #231F20;
    width: 100vw; 
    min-height: 100vh;
    box-sizing: border-box;
    

    #buttons {
        margin:30px 0 ;
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        flex-direction: row;
        justify-content: space-evenly;
    }
    button{
        border: none;
        min-width: 6.2rem;
        height: 2rem;
        border-radius: 1000px;
        cursor: pointer;
        color: #1B1E22;
        font-weight: bold;
        font-size: .9rem;
        margin: 0.5rem;
        box-shadow: 0px 3px 9px #1B1E22;
    }
    #ps1, #ps2, #ps3, #ps4 {background: #9381FF}
    #xbox, #xbox360 {background: #4BBE64}
    #gamecube, #n64, #wii {background: #C54644}
    button:hover{
        background: #7C82A2;
    }
    h1 { 
        box-shadow: 0px 3px 9px #1B1E22;
        border-radius: 100px;
        min-width: 6rem;
        text-align: center;
        font-size: 1.7rem;
        padding: 0 10px;
    }
    #title{
        color: salmon;
        margin:80px 0 0;
    }
    div{
        width:100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    #scores table {
        width: 80%;
        margin: 2rem 0 0 ;
        box-shadow: 0px 3px 9px #1B1E22;
        border-collapse: collapse;
    }
    td{ height: 3rem; }
    th{ height: 2rem; }
    tr {
        border:  2px solid #7C82A2;
        text-align: center;
        margin: 0;
        background: #333648;
        color: #D3D5D9;
    }
    tr:first-child {background: #7C82A2; color: #1B1E22; }
`

export default LeaderboardsStyle