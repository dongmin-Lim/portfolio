import { useState } from "react";
import styles from "./Nav.module.css";

function Nav() {
  return (
    <nav className={styles.nav}>
      <a href="/">HOME</a>
      <a href="/profile">PROFILE</a>
      <a href="/tech">TECH</a>
      <a href="/talk">TALK</a>
    </nav>
  );
}

export default Nav;
