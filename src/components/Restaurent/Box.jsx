import React, { useState } from "react";

const Box = ({ menuData }) => {
  return (
    <>
      {menuData.map(function (item) {
        return (
          <div key={item.id}>
            <p>{item.type}</p>
            <h1>{item.title}</h1>
            <hr />
            <p>{item.menuDescription}</p>
          </div>
        );
      })}
    </>
  );
};

export default Box;
