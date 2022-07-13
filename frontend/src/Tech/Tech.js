import styles from "./Tech.module.css";

function Tech() {
  return (
    <div id="title_2" style={{ fontSize: "20px" }}>
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
    </div>
  );
}
export default Tech;
