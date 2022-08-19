import styles from "./Tech.module.css";

function Tech() {
  return (
    <div id="title_2" style={{ fontSize: "40px", textAlign: "center" }}>
      TECH
      <div className={styles.tech}>
        <img className={styles.tech_img} src="./img/html.png" alt="html" />
        <img className={styles.tech_img} src="./img/css.png" alt="css" />
        <img className={styles.tech_img} src="./img/js.png" alt="js" />
        <br />
        <img className={styles.tech_img} src="./img/react.png" alt="react" />
        <img className={styles.tech_img} src="./img/ts.png" alt="ts" />
        <img className={styles.tech_img} src="./img/git.png" alt="git" />
      </div>
      PORTFOLIO
      <div className={styles.portfolio}>
        <a>https://github.com/Jin-Mook/IT_Library</a>
        <div>
          - 백엔드 개발자로 활동중인 제 친구와 협업하여 영화 리뷰서비스를 제작했습니다.
        </div>
      </div>
      <div className={styles.portfolio}>
        <a>https://github.com/dongmin-Lim/movie_review_service</a>
        <div>
          - 백엔드 개발자로 활동중인 제 친구와 협업하여 책 리뷰서비스를 제작했습니다.
        </div>
      </div>
      <div className={styles.pageSelect}>
        <a className={styles.nextPage} href="/profile">
          PREVIOUS
        </a>
        <a className={styles.nextPage} href="/talk">
          NEXT
        </a>
      </div>
    </div>
  );
}
export default Tech;
