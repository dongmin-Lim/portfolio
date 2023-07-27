import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  body {
    margin: 0 auto;
    width: 1200px;
    margin-top: 100px;
    margin-bottom: 50px;
    background-color: rgb(40, 40, 40);
    color: rgb(255, 255, 255);
    font-family: "Do Hyeon", sans-serif;
  }

  a {
    color: white;
  }
`;

export default GlobalStyle;
