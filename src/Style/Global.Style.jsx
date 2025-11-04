import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0; padding: 0; 
        box-sizing: border-box;
    }

    body {
        background-color: #f0f2f5;
        scroll-behavior: smooth;
    }
`;
