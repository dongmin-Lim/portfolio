import { styled } from "styled-components";

function Tech() {
  return (
    <Frame id="title_2">
      TECH
      <TechBox>
        <TechImg src="./img/html.png" alt="html" />
        <TechImg src="./img/css.png" alt="css" />
        <TechImg src="./img/js.png" alt="js" />
        <br />
        <TechImg src="./img/react.png" alt="react" />
        <TechImg src="./img/ts.png" alt="ts" />
        <TechImg src="./img/git.png" alt="git" />
      </TechBox>
      <PageSelect>
        <NextPage href="/profile">PREVIOUS</NextPage>
        <NextPage href="/talk">NEXT</NextPage>
      </PageSelect>
    </Frame>
  );
}

export default Tech;

const Frame = styled.div`
  font-size: "40px";
  text-align: "center";
`;

const TechBox = styled.div`
  text-align: center;
  background-color: rgba(100, 100, 100, 0.2);
  border-radius: 20px;
  margin-bottom: 20px;
`;

const TechImg = styled.img`
  height: 130px;
  margin: 50px 50px;
  transition: all 0.2s linear;
  :hover {
    transform: scale(1.2);
  }
`;

const PageSelect = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 20px;
`;

const NextPage = styled.a`
  height: 70px;
  margin: 0;
  text-align: center;
  line-height: 70px;
  background-color: rgba(100, 100, 100, 0.2);
  border-radius: 20px;
  font-size: 25px;
`;
