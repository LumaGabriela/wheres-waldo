import styled from "styled-components"

const HeaderContainer = styled.header`
    width:100%;
    height:50px;
    position:absolute;
    top: 0; 
    color: salmon;
    font-family: inherit;
    z-index: 10;
    
    ul{
        display: flex;
        margin: 0; padding: 0 2rem;
        width: 100%; height:100%;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        font-family: inherit;
        list-style:none;
        position: absolute;
        background: #1A2760;
        z-index: 10;

        a{color: inherit; text-decoration:none}
        li{
            font-family: inherit;
        }
    }
    `
const ToggleDropdown = styled.button`
    background: #FF5F5C;
    border-radius: 100px;
    width: 40px; height:40px;
    border: none;
    cursor: pointer;
    transition: background .3s ease-in-out;
    
    &:hover{background: #FF5F5C88}
`
export {HeaderContainer, ToggleDropdown}