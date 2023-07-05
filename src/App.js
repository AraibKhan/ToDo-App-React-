import { useState } from "react";
import Header from "./components/Header";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import UpdateModal from "./components/UpdateModal";

const tasksData = [];

const App = () => {
  const [tasks, setTasks] = useState(tasksData);
  const [showModal, setShowModal] = useState(false);
  const [currTask, setCurrTask] = useState(null);

  const openModal = (taskId) => {
    setCurrTask(taskId);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const addTask = (newTask) => {
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const deleteTask = (taskId) => {
    setTasks((tasks) => tasks.filter((task) => task.id !== taskId));
  };

  const updateStatus = (taskId) => {
    setTasks((tasks) =>
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const updateTitle = (updtTitle) => {
    if (updtTitle.trim().length === 0) return;

    setTasks((tasks) =>
      tasks.map((task) =>
        task.id === currTask ? { ...task, title: updtTitle } : task
      )
    );
  };

  const deleteAll = () => {
    if (tasks.length === 0) return;
    const confirmed = window.confirm(
      "Are you sure you want to delete all items?"
    );

    if (confirmed) setTasks([]);
  };

  return (
    <>
      {showModal && (
        <UpdateModal
          closeModal={closeModal}
          task={tasks.find((task) => task.id === currTask)}
          updateTitle={updateTitle}
        />
      )}
      <Header />
      <main>
        <TodoForm addTask={addTask} />
        <TodoList
          tasks={tasks}
          deleteTask={deleteTask}
          updateStatus={updateStatus}
          deleteAll={deleteAll}
          openModal={openModal}
        />
      </main>
    </>
  );
};

export default App;
