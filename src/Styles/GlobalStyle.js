import { createGlobalStyle } from "styled-components";



export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing:  border-box;
    }

    ul, li {
        list-style: none;
    }

    body {
        font-family: 'Inter', sans-serif;
    }

`