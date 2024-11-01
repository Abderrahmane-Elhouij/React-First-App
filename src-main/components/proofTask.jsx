import React from "react";

function TaskElt({ task, index, addLineThroughEvent, deleteEvent }) {
  return (
    <li>
      <span
        onClick={() => addLineThroughEvent(index)}
        style={task.completed ? { textDecoration: "line-through" } : {}}
      >
        {task.name}
      </span>
      <input
        type="button"
        value="supprimer"
        onClick={() => deleteEvent(index)}
      />
    </li>
  );
}

export default TaskElt;
