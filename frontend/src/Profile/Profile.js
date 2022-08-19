import styles from "./Profile.module.css";

function Profile() {
  return (
    <div style={{ fontSize: "40px", textAlign: "center" }}>
      PROFILE
      <img
        className={styles.profile_img}
        src="./img/IMG_1069.JPG"
        onContextMenu={(e) => e.preventDefault()}
        alt="profileimg"
      />
      <div className={styles.profile}>
        <div className={styles.left_profile}>
          <div className={styles.info}>이름</div>
          <div className={styles.info}>MBTI</div>
          <div className={styles.info}>관심 개발 분야</div>
          <div className={styles.info}>git</div>
          <div className={styles.info}>instagram</div>
        </div>
        <div className={styles.right_profile} style={{ borderLeft: "3px solid white" }}>
          <div className={styles.info}>임동민</div>
          <div className={styles.info}>ESFJ</div>
          <div className={styles.info}>Front-End</div>
          <div className={styles.info}>
            <a
              href="https://github.com/dongmin-Lim"
              target="_blank"
              rel="noopener noreferrer"
            >
              HERE!
            </a>
          </div>
          <div className={styles.info}>
            <a
              className={styles.instagram1}
              href="https://www.instagram.com/dm_0216/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Me 😊
            </a>
            <a
              className={styles.instagram2}
              href="https://www.instagram.com/pepsi._.1009/"
              target="_blank"
              rel="noopener noreferrer"
            >
              My Dog 🐶
            </a>
          </div>
        </div>
      </div>
      <div className={styles.pageSelect}>
        <a className={styles.nextPage} href="/">
          PREVIOUS
        </a>
        <a className={styles.nextPage} href="/tech">
          NEXT
        </a>
      </div>
    </div>
  );
}

export default Profile;
