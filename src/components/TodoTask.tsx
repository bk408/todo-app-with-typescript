import React, { useState } from "react";

const TodoTask: React.FC = () => {
  const [task, setTask] = useState<string>("");
  const [taskList, setTaskList] = useState<string[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTask(e.target.value);
  };

  const handleAddTask = () => {
    if (task.trim() !== "") {
      setTaskList([...taskList, task]);
      setTask("");
    }
  };
  return (
    <div className="container">
      <div className="title">
        <h2>ToDo List</h2>
      </div>
      <div className="todo-details">
        <input
          type="text"
          placeholder="enter task"
          value={task}
          onChange={handleChange}
        />
        <button onClick={handleAddTask}>Add</button>
      </div>
      <ul>
        {taskList.map((item, index) => (
          <li key={index}> {item} </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoTask;
