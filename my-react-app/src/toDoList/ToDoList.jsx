import { useState } from 'react';
import './ToDoList.css';

const ToDoList = () => {

    const [task, setTask] = useState("");
    const [list, setList] = useState([]);

    const handleTaskChange = (e) => {
        setTask(e.target.value);
    };

    const handleAddButton = () => {
        if (task.trim() === "") return;

        setList(l => [...l, task]);
        setTask("");
    };

    const handleDelete = (index) => {
        const newList = list.filter((item, i) => i !== index);
        setList(newList);
    };

    const moveTaskUp = (index) => {
        if (index === 0) return;

        const newList = [...list];

        [newList[index - 1], newList[index]] =
            [newList[index], newList[index - 1]];

        setList(newList);
    };

    const moveTaskDown = (index) => {
        if (index === list.length - 1) return;

        const newList = [...list];

        [newList[index + 1], newList[index]] =
            [newList[index], newList[index + 1]];

        setList(newList);
    };

    return (
        <div className="todo-container">

            <h1>To Do List</h1>

            <input
                type="text"
                value={task}
                onChange={handleTaskChange}
                placeholder="Add a task"
            />

            <button onClick={handleAddButton}>
                Add
            </button>

            <ul className="todo-list">

                {list.map((item, index) => (
                    <li key={index}>
                        {item}

                        <button onClick={() => handleDelete(index)}>
                            Delete
                        </button>

                        <button onClick={() => moveTaskUp(index)}>
                            ☝️
                        </button>

                        <button onClick={() => moveTaskDown(index)}>
                            👇
                        </button>
                    </li>
                ))}

            </ul>

        </div>
    );
};

export default ToDoList;