import React, { useState } from "react";
import TaskElt from "./proofTask.jsx";

function TaskList() {
  const [task, setTask] = useState({});
  const [tasksList, setTasksList] = useState([]);

  function clickEvent() {
    let tab = [...tasksList, { ...task }];
    setTasksList(tab);
  }

  function deleteEvent(index) {
    let tab = [...tasksList.slice(0, index), ...tasksList.slice(index + 1)];
    setTasksList(tab);
  }

  function addLineThroughEvent(index) {
    let tab = [...tasksList];
    tab[index].completed = !tab[index].completed;
    setTasksList(tab);
  }

  return (
    <>
      <input
        type="text"
        onChange={(e) => setTask({ name: e.target.value, completed: false })}
      />
      <input type="button" value="Ajouter" onClick={clickEvent} />
      <br />
      <ul>
        {tasksList.map((elt, index) => (
          <TaskElt
            key={index}
            task={elt}
            index={index}
            addLineThroughEvent={addLineThroughEvent}
            deleteEvent={deleteEvent}
          />
        ))}
      </ul>
    </>
  );
}

export default TaskList;
