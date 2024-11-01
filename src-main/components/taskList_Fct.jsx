import React, { useState } from "react";

function Task(props) { 
  const { name, completed, cacher, supprimer } = props;

  return (
    <>
      <span
        style={{ textDecoration: completed ? "line-through" : "none" }}
        onClick={cacher}
      >
        {name}
      </span>
      <button onClick={supprimer}>Supprimer</button>
    </>
  );
}

function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() === "") return;
    setTasks([...tasks, { name: newTask, completed: false }]);
    setNewTask("");
  };

  const cacherTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <>
      <h2>Liste de tâches</h2>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Nouvelle tâche"
      />
      <button onClick={addTask}>Ajouter</button>
      <div>
        {tasks.map((task, index) => (
          <Task
            key={index}
            name={task.name}
            completed={task.completed}
            cacher={() => cacherTask(index)}
            supprimer={() => deleteTask(index)}
          />
        ))}
      </div>
    </>
  );
}

export default TaskList;
