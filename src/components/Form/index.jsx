import React from 'react'
import styles from "./styles.module.css";

function Form({setTask}) {
  const handleClick = (e) => {
    const value = e.target.previousElementSibling.value;
    if (value == ""){ return alert("Please enter a task")}

    setTask((prev) => [...prev, {title: value, isDone: false}]);
    e.target.previousElementSibling.value = "";
    
  }
  return (
    <div className={styles.form}>
        <input type="text" placeholder="Add new list item" />
        <button onClick={handleClick}>Add</button>
    </div>
  )
}

export default Form