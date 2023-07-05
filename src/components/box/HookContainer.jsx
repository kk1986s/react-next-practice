import React from "react";
import UseEffect from "./UseEffect";
import UseState from "./UseState";
import UseReducer from "./UseReducer";
import styles from "./button.module.css";
const HookContainer = () => {
  return (
    <div className={styles.mainContainer}>
      <UseEffect />
      <UseState />
      <UseReducer />
    </div>
  );
};

export default HookContainer;
