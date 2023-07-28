import styles from "./Home.module.css";
import styled from "styled-components";

function Home() {
  return (
    <Frame>
      <h1 className={styles.title}>
        프론트엔드 개발자를 꿈꾸고 있는 임동민의 자기소개 페이지 입니다.
      </h1>
      <a className={styles.nextPage} href="resume/profile">
        GO TO PROFILE
      </a>
    </Frame>
  );
}
export default Home;

const Frame = styled.div`
  display: grid;
  align-items: center;
  justify-items: center;
`;
