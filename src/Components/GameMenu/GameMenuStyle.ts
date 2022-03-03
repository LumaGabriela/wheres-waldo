import styled from "styled-components"

const GameMenuStyle = styled.div`
    width:14rem; height: 11rem;
    padding: 0 1rem;  
    position: absolute;
    margin: 0;
    
    background: #333138;
    border-radius: 10px;
    cursor: pointer;

    div{
        display: flex;
        align-items: center;
        justify-content: center;
        height: 3.66rem; color: #DBD4D3;
        border-bottom: 1px solid #DBD4D3;
        cursor: pointer;
    }
    div:last-child{border: none;}
`
const AimContainer = styled.div`
    width: 90px; height: 90px;
    border:4px solid #DBD4D3;
    border-radius: 10px;
    background: transparent;
    position: absolute;
    cursor: crosshair;
    
`
export  {GameMenuStyle, AimContainer}