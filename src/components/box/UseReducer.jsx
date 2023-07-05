import React, { useReducer } from "react";
import styles from "./button.module.css";
const intitalState = 0;
function reducer(state, action) {
  if (action.type === "INCR") {
    state += 1;
  }
  if (action.type === "DECR" && state > 0) {
    state -= 1;
  }
  return state;
}
const UseReducer = () => {
  //useReducer is a function it will take two arguments - and determines change in
  //state of the application

  const [state, dispatch] = useReducer(reducer, intitalState);

  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>UseReducer Example</h1>
        <h1 className={styles.counter}>{state}</h1>
        <button
          className={styles.btn}
          onClick={() => {
            dispatch({ type: "INCR" });
          }}
        >
          Increment
        </button>
        <button
          className={styles.btn}
          onClick={() => {
            dispatch({ type: "DECR" });
          }}
        >
          Decrement
        </button>
      </div>
      <hr />
    </>
  );
};

export default UseReducer;
