import styles from "./Nav.module.css";

function Nav() {
  return (
    <nav className={styles.nav}>
      <a href="/">PROFILE</a>
      &nbsp;
      <a href="/tech">TECH</a>
      &nbsp;
      <a href="/talk">TALK</a>
      &nbsp; &nbsp;
    </nav>
  );
}

export default Nav;
