import styled from "styled-components"

const DropdownStyle = styled.div`
    width:18rem; 
    padding: 0;  
    position: absolute;
    margin: 0;
    background: #7D8CC4;
    color: #201F33;
    right:0; 
    transition: top .6s ease;
    z-index: 1;
    display: flex;
    flex-direction: column;
    box-shadow: 0 3px 10px black;
    #container{
        height: 100px;
        border-bottom: 1px solid #A09DAA;
        display: flex;
        padding: 0 0.2rem 0 1rem;
        flex-direction: row;
        justify-content: space-between;
        img{
            height: 100%;
        }
        #details{
            display: flex;
            flex-direction:column;
            justify-content: space-evenly;
        }
    }
    #container:last-child{border: none;}
    `

export default DropdownStyle