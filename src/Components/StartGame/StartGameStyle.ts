import styled from "styled-components"

const StartGameStyle = styled.div`
    background: #8ba1ff;
    color: #000F52;
    position: absolute;
    z-index: 5;
    width: 100%; 
    min-height: 100%;
    max-height: max-content;
    padding: 80px 5rem 0;
    text-align: center;
`
const GameCardsContainer = styled.div`
    width: 100%;
    display: grid;
    gap: 5px;
    grid-template-columns: repeat(auto-fill, 10rem);
    grid-template-rows: repeat(auto-fill, 15rem);
    justify-content: center;
    
    
    a{color: inherit; text-decoration:none}
    div{
        width: 10rem; height: 15rem;
        background: #162150;
        border-radius: 20px;
        background-position: 100%;
        background-size: 100%;
        cursor: pointer;
        display: flex;
        justify-content:center;
        color: #F5F4F6;
        font-size: 1.7rem;
        -webkit-text-stroke: 1px #212738;
        text-shadow: 0 0 3px #212738;
        box-shadow: 0 2px 10px black;
    }
    
`

export {StartGameStyle, GameCardsContainer}