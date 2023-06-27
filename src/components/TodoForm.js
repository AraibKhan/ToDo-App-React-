import { useState } from "react";

const TodoForm = ({ addTask }) => {
  const [title, setTitle] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (title.trim().length === 0) return;
    const newItem = {
      id: crypto.randomUUID(),
      title,
      completed: false,
    };
    addTask(newItem);

    //Reset Form.
    setTitle("");
  };

  return (
    <form className="form-container" onSubmit={submitHandler}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter Title"
      />
      <button>Add</button>
    </form>
  );
};

export default TodoForm;
