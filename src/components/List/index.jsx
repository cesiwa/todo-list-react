import React, { useState } from 'react';
import styles from "./styles.module.css";

function List({task,setTask}) {
    const handleChange = (index) => {
        const newTask = [...task];
        newTask[index].isDone = !newTask[index].isDone;
        setTask(newTask);
    };
    const selectedItems = task.filter((item) => item.isDone);

    const handleClick = () => {
        const newTask = task.filter((item) => !item.isDone);
        /* Sadece seçili olmayan itemleri güncelleidk. Böylece seçili olanlar gitti*/
        setTask(newTask);
    }

    return (
        <>
        <div className={styles.list}>

            {task.map((item,i) => (
                <label className={styles.checkbox} key={i}>
                    <p className={item.isDone ? styles.lineThrough : "" }>{item.title}</p>
                    <input type="checkbox" checked={item.isDone} onChange={() =>handleChange(i)}/>

                    <span className={styles.check}></span>
                </label>

            ))}

        </div>
        <div className={styles.footer}>
            <p> {selectedItems.length} Item selected</p>
            <p onClick={handleClick}>Clear All</p>
        </div>
</>
    )

}

export default List