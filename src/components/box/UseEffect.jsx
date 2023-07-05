import React, { useState, useEffect } from "react";
import styles from "./button.module.css";

const UseEffect = () => {
  const [count, setCount] = useState(10);

  useEffect(() => {
    document.title = `Incrementing ${count}`;
    let h1 = document.getElementsByTagName("h1");
    h1[0].innerHTML = `UseEffect Example ${count}`;
  });

  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}></h1>
        <h1 className={styles.counter}>{count}</h1>
        <button className={styles.btn} onClick={() => setCount(count + 1)}>
          Increment
        </button>
      </div>
      <hr />
    </>
  );
};

export default UseEffect;
