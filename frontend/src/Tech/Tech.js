import { styled } from "styled-components";
import PageSelector from "../Component/PageSelector";

function Tech() {
  return (
    <Frame id="title_2">
      <Title>TECH</Title>
      <TechBox>
        <TechImg src="./img/html.png" alt="html" />
        <TechImg src="./img/css.png" alt="css" />
        <TechImg src="./img/js.png" alt="js" />
        <br />
        <TechImg src="./img/react.png" alt="react" />
        <TechImg src="./img/ts.png" alt="ts" />
        <TechImg src="./img/git.png" alt="git" />
      </TechBox>
      {PageSelector("/profile", "/portfolio")}
    </Frame>
  );
}

export default Tech;

const Frame = styled.div`
  font-size: "40px";
  text-align: "center";
`;

const Title = styled.div`
  font-size: 28px;
  margin-bottom: 10px;
`;

const TechBox = styled.div`
  text-align: center;
  background-color: rgba(100, 100, 100, 0.2);
  border-radius: 20px;
`;

const TechImg = styled.img`
  height: 130px;
  margin: 50px 50px;
  transition: all 0.2s linear;
  :hover {
    transform: scale(1.2);
  }
`;
