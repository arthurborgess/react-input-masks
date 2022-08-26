import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: sans-serif;
    }
`;

export const Container = styled.div`
    left: 50%;
    top: 50%;
    position: absolute;
    transform: translate(-50%, -50%);
    max-width: 300px;
    width: 95%;
    display: flex;
    flex-direction: column;
    padding: 2rem;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

    input {
        width: 100%;
        height: 32px;
        margin: 2px 0 16px 0;
        text-indent: 5px;
        border: none;
        background-color: #F5F5F5;
        outline: none;
    }
`;