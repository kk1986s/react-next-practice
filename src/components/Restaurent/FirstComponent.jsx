import React, { useReducer, useState } from "react";
import Box from "./Box";
import data from "./data";
import Filter from "./Filter";
//useState and useReducer Todo List
const catList = [
  ...new Set(
    data.map((cat) => {
      return cat.type;
    })
  ),
];
export const FirstComponent = () => {
  const [menuData, setMenuData] = useState(data);
  const [list, setList] = useState(catList);
  const filterItem = (cat) => {
    let updateList = data.filter((element) => {
      return element.type === cat;
    });
    setMenuData(updateList);
    if (cat == "") {
      setMenuData(data);
    }
  };

  return (
    <div>
      <div className="filter">
        <Filter filterData={filterItem} list={list} />
      </div>
      <div className="box">
        <Box menuData={menuData} />
      </div>
    </div>
  );
};
