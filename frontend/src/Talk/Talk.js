import styles from "./Talk.module.css";

function Talk() {
  return (
    <div id="title_3" style={{ fontSize: "20px" }}>
      TALK
      <div className={styles.talk}>
        <div className={styles.talk_1}>
          <h3 style={{ fontSize: "30px" }}>동료 레이서에게...</h3>
          6개월의 장기 레이스동안 지치지 않고 끝까지
          <br />
          모두 좋은 결과 얻어서 갔으면 좋겠습니다.
        </div>
        <div className={styles.talk_2} style={{ fontSize: "40px" }}>
          <h3 style={{ fontSize: "30px" }}>나의 관심사</h3>
          🏎👟💻
        </div>
      </div>
    </div>
  );
}

export default Talk;
