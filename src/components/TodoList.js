import { useState } from "react";
import TodoItem from "./TodoItem";

const TodoList = ({
  tasks,
  deleteTask,
  updateStatus,
  deleteAll,
  openModal,
}) => {
  const [sortBy, setSortBy] = useState("input");

  let sortedTasks;
  if (sortBy === "input") sortedTasks = tasks.slice();
  if (sortBy === "title")
    sortedTasks = tasks.slice().sort((a, b) => a.title.localeCompare(b.title));
  if (sortBy === "completed")
    sortedTasks = tasks
      .slice()
      .sort((a, b) => Number(a.completed) - Number(b.completed));

  return (
    <div className="todo-list">
      <div className="list-actions">
        <div className="sort">
          <label>Sort:</label>
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="input">By created</option>
            <option value="title">By title</option>
            <option value="completed">By status</option>
          </select>
        </div>
        <button onClick={deleteAll}>Delete All</button>
      </div>
      <ul>
        {sortedTasks.map((task) => (
          <TodoItem
            key={task.id}
            task={task}
            deleteTask={deleteTask}
            updateStatus={updateStatus}
            openModal={openModal}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
