import React from "react";

const Timer = () => {
  let curTime = new Date();
  let timeStr = `${curTime.getHours()}:${curTime.getMinutes()}:${curTime.getSeconds()}`;
  let updateTime = setInterval(() => {
    timeStr;
  }, 1000);
  return <div>{timeStr}</div>;
};

export default Timer;
