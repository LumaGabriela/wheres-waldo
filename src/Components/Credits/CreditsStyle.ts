import styled from "styled-components"

const CreditsStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    background: #212742;
    color: #AEB2C4;
    width: 100vw; 
    min-height: 100vh;
    box-sizing: border-box;
    text-align: center;
    
    #credits{
        top: 80px;
        position: absolute;
        min-height: 15rem;
        width: 80%;
        display: flex;
        background: #333E6A;
        flex-direction: column;
        justify-content: space-evenly;
        border-radius: 10px;
    }
    a{
        color: inherit;
        transition: color .3s ease;
    }
    a:hover {color: #5D71C7;}
`
export {CreditsStyle}