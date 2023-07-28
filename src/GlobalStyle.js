import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  body {
    width: 1200px;
    height: 100vh;
    margin: 0 auto;
    margin-top: 100px;
    font-family: "Do Hyeon", sans-serif;
    background: linear-gradient(
        to bottom,
        rgba(0, 232, 232, 0.8),
        white);
    background-size: cover;
    background-position: top;
  }

  a {
    color: white;
  }
`;

export default GlobalStyle;
