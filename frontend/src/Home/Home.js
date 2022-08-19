import styles from "./Home.module.css";

function Home() {
  return (
    <div>
      <h1 className={styles.title}>
        프론트엔드 개발자를 꿈꾸고 있는 임동민의 자기소개 페이지 입니다.
      </h1>
      <a className={styles.nextPage} href="/profile">
        GO TO PROFILE
      </a>
    </div>
  );
}
export default Home;
