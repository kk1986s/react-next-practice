import React from "react";

const Filter = ({ filterData, list }) => {
  return (
    <div>
      <ul className="navigation">
        <li onClick={() => filterData("")}>All</li>
        {list.map(function (val, index) {
          return (
            <li
              key={index}
              onClick={() => {
                filterData(val);
              }}
            >
              {val}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Filter;
