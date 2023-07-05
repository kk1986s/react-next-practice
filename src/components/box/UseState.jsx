import React, { useState } from "react";
import styles from "./button.module.css";
const UseState = () => {
  const [count, setCount] = useState(10);

  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>UseState Example</h1>
        <h1 className={styles.counter}>{count}</h1>
        <button className={styles.btn} onClick={() => setCount(count + 1)}>
          Increment
        </button>
        <button
          className={styles.btn}
          onClick={() => (count > 0 ? setCount(count - 1) : 0)}
        >
          Decrement
        </button>
      </div>
      <hr />
    </>
  );
};

export default UseState;
