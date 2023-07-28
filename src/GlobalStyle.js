import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  body {
    margin: 0 auto;
    width: 1200px;
    margin-top: 100px;
    /* margin-bottom: 50px; */
    /* background-color: rgb(40, 40, 40); */
    /* color: rgb(255, 255, 255); */
    /* background: linear-gradient( to bottom, rgb(150,50,50), black ); */
    background-repeat: no-repeat;
    background-size: auto;
    font-family: "Do Hyeon", sans-serif;
    height: 100vh;
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
