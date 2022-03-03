import { createGlobalStyle } from "styled-components"

export default createGlobalStyle `
    @import url('https://fonts.googleapis.com/css2?family=Noto+Sans&display=swap');
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    .App, .Main{
        width: 100%;
        display: flex !important;
        font-family: 'Noto Sans', sans-serif;
        overflow-x:hidden;
    }
    .App{background: #dfdf00}

`