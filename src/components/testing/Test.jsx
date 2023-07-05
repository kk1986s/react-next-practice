import React, { useEffect, useState } from "react";
import styles from "./test.module.css";
import Timer from "../timer/Timer";
const Test = () => {
  const [mode, setMode] = useState(styles.lightMode);
  function darkMode() {
    setMode(styles.darkMode);
    localStorage.setItem("dark", setMode(styles.darkMode));
  }
  function lightMode() {
    setMode(styles.lightMode);
  }

  return (
    <div className={`${styles.container} ${mode}`}>
      <div>
        <h1>contextApi</h1>
        <button className={styles.btnDark} onClick={darkMode}>
          Dark Mode
        </button>
        <button onClick={lightMode}>Light Mode</button>
        <hr />
        <div>
          <Timer />
        </div>
      </div>
    </div>
  );
};

export default Test;
