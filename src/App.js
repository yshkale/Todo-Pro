import { useState } from "react";
import "./Welcome.css";
import "./App.css";
import "./Querries.css";
import Welcome from "./Welcome.js";

function App() {
  // ---WELCOME---

  const [showWelcome, setShowWelcome] = useState(true);

  const handleWelcome = function () {
    setShowWelcome(false);
  };

  // ---MAIN---

  const [tasks, setTasks] = useState([
    {
      checked: false,
      todoText: "",
    },
  ]);

  const addNewTask = function () {
    if (tasks[tasks.length - 1]?.todoText.trim() !== "") {
      setTasks([...tasks, todo]);
      setTodo({
        checked: false,
        todoText: "",
      });
    }
  };

  const [todo, setTodo] = useState({
    checked: false,
    todoText: "",
  });

  const handleChange = function (e, index) {
    const updatedTasks = [...tasks];
    updatedTasks[index] = {
      ...updatedTasks[index],
      todoText: e.target.value,
    };
    setTasks(updatedTasks);
  };

  const handleCheckbox = function (e, index) {
    const updatedTasks = [...tasks];
    updatedTasks[index] = {
      ...updatedTasks[index],
      checked: e.target.checked,
    };
    setTasks(updatedTasks);
  };

  const deleteTask = function (index) {
    const updatedTasks = tasks.filter((e, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <>
      <header className="header">
        <h1 className="logo">TodoPro.</h1>
      </header>

      {showWelcome && <Welcome welcome={handleWelcome} />}

      {!showWelcome && (
        <div className="main-content">
          {tasks.map((task, index) => (
            <div className="todo" key={index}>
              <input
                className="todo-checkbox"
                type="checkbox"
                value={task.checked}
                onChange={(e) => handleCheckbox(e, index)}
              ></input>
              <input
                className={
                  task.checked && task.todoText.trim() !== ""
                    ? "todo-text completed"
                    : "todo-text"
                }
                type="text"
                value={task.todoText}
                onChange={(e) => handleChange(e, index)}
                placeholder="get things done..."
              ></input>
              <button className="delete-btn" onClick={() => deleteTask(index)}>
                x
              </button>
            </div>
          ))}
          <button className="add-task" onClick={addNewTask}>
            Add Task
          </button>
        </div>
      )}
      <footer className="footer">Designed and built by Yash Kale.</footer>
    </>
  );
}

export default App;
