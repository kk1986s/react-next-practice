import React, { useEffect, useState } from "react";
import styles from "./notes.module.css";

const ListContainer = () => {
  const [inputData, setInputData] = useState(""); //taking input
  const [items, setItems] = useState([]); // storing and displaying items
  const [editItem, setEditItem] = useState(""); // edit items
  const [updateBtn, setUpdateBtn] = useState(false); // toggle button text add -- update

  //Get Value From Textbox
  const getValue = (val) => {
    setInputData(val.target.value);
  };

  const addItems = () => {
    if (!inputData) {
      alert("Please Enter Items");
    } else if (inputData && updateBtn) {
      setItems(
        items.map((element) => {
          if (element.id === editItem) {
            return { ...element, itemName: inputData };
          }
          return element;
        })
      );
      setUpdateBtn(false);
      setInputData("");
      setEditItem(null);
    } else {
      const newItems = {
        id: new Date().getTime().toString(),
        itemName: inputData,
      };
      setItems([...items, newItems]);
      setInputData("");
    }
    if (typeof window !== "undefined") {
      localStorage.setItem("todoList", JSON.stringify(items));
    }
  };
  //Display Items
  const deleteItem = (index) => {
    const updatedItems = items.filter((item) => {
      return item.id !== index;
    });
    setItems(updatedItems);
  };
  //make editable content(item)
  const edit = (index) => {
    const edited = items.find((item) => {
      return item.id === index;
    });
    setUpdateBtn(true);
    setInputData(edited.itemName);
    setEditItem(index);
  };
  //store list to localStorage
  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(items));
  }, [items]);
  useEffect(() => {
    const list = JSON.parse(localStorage.getItem("todoList"));
    setItems(list);
    console.log(list);
  }, []);
  return (
    <div>
      <h1 className={styles.title}>Todo List</h1>
      <div className={styles.listContainer}>
        <div className={styles.addItem}>
          <input
            type="text"
            placeholder="Enter Items"
            className={styles.inputTxt}
            value={inputData}
            onChange={getValue}
          />
          <button className={styles.btnAdd} onClick={addItems}>
            {updateBtn ? "Update" : "Add"}
          </button>
        </div>
        <div className={styles.showList}>
          <h6>Added Items</h6>
          <ul>
            {items.map((item) => {
              return (
                <li key={item.id}>
                  <span>{item.itemName}</span>
                  <span>
                    <span
                      className={styles.edit}
                      onClick={() => {
                        edit(item.id);
                      }}
                    >
                      Edit
                    </span>
                    <span
                      className={styles.delete}
                      onClick={() => {
                        deleteItem(item.id);
                      }}
                    >
                      Delete
                    </span>
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ListContainer;
