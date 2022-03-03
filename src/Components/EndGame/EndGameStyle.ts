import styled from "styled-components"

const EndGameStyle = styled.div`
    width: 80%;
    height: 40%;
    position: fixed;
    top: 100px;
    left: 10%;
    z-index: 7;
    background: #C6D2ED;
    color: #153851;
    border-radius:20px;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    transition: display .5s ease;
    text-align: center;
    #user-input, button{
        border: none;
        height:2rem;
        border-radius: 5px;
    }
    
    #user-input{
        width: 50%;
        padding: 0 1rem;
        font-size: 1.07rem;
        color: inherit;
    }
    #buttons{
        width: 60%; 
        display: flex; 
        justify-content:space-around;
        flex-wrap:wrap;
    }
    button{
        width: 4rem;
        color: inherit;
        box-shadow: 0 2px 5px gray;
        cursor: pointer;
        transition: background 0.5s ease;
    }
    #cancel-btn{background: #F67451}
    #submit-btn{background: #C8E69E}

    #cancel-btn:hover{background: #F4562A}
    #submit-btn:hover{background: #9AD14D}

    input:focus, button:focus{
        outline-color: salmon;
        outline-style: outset;
        outline-width: 2px;
    }

    @media screen and (max-width:500px){
        #user-input{width:90%}
    }
`

export {EndGameStyle}