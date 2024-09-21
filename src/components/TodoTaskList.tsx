import React, { useState } from "react";

const TodoTaskList: React.FC = () => {
  const [task, setTask] = useState<string>("");
  const [list, setList] = useState<string[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTask(e.target.value);
  };

  const handleAddTask = () => {
    if (task.trim() !== "") {
      setList([...list, task]);
      setTask("");
    }
  };

  return (
    <div className="container">
      <div className="box">
        <div className="title">
          <h3>ToDo App</h3>
        </div>
        <div className="list-input">
          <input
            type="text"
            placeholder="enter task"
            value={task}
            onChange={handleChange}
          />
          <button onClick={handleAddTask}>Add</button>
        </div>
        <ul>
          {list.map((item, index) => (
            <li key={index}> {item} </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoTaskList;
