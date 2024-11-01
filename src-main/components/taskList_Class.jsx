import React, { Component } from "react";

class Task extends Component {
  render() {
    const { name, completed, cacher, supprimer } = this.props;

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
}

class TaskList extends Component {
  state = { tasks: [], newTask: "" };

  addTask = () => {
    if (this.state.newTask.trim() === "") return;
    this.setState((prevState) => ({
      tasks: [
        ...prevState.tasks,
        { name: prevState.newTask, completed: false },
      ],
      newTask: "",
    }));
  };

  cacherTask = (index) => {
    const updatedTasks = [...this.state.tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    this.setState({ tasks: updatedTasks });
  };

  deleteTask = (index) => {
    const updatedTasks = this.state.tasks.filter((_, i) => i !== index);
    this.setState({ tasks: updatedTasks });
  };

  render() {
    const { tasks, newTask } = this.state;

    return (
      <div>
        <h2>Liste de tâches</h2>
        <input
          type="text"
          value={newTask}
          onChange={(e) => this.setState({ newTask: e.target.value })}
          placeholder="Nouvelle tâche"
        />
        <button onClick={this.addTask}>Ajouter</button>
        <div>
          {tasks.map((task, index) => (
            <Task
              key={index}
              name={task.name}
              completed={task.completed}
              cacher={() => this.cacherTask(index)}
              supprimer={() => this.deleteTask(index)}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default TaskList;
