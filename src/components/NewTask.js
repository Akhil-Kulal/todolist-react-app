import React, { useState } from "react";

const NewTask = (props) => {
  const [newTask, setNewTask] = useState("");

  // calls the API with POST method as soon as "ADD" Button is clicked
  const AddNewTask = () => {
    if (newTask !== "") {
      fetch(`https://jsonplaceholder.typicode.com/posts`, {
        method: "POST",
        body: JSON.stringify({
          title: `${newTask}`,
          completed: false,
          userId: 1,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((json) => {
          console.log(json);
          alert(`Task ${json.title} Added`);
        });
    } else {
      alert("Enter a new task");
    }
    setNewTask("");
  };

  // function to edit NewTask when the input field is changed
  const handleNewTaskChange = (e) => {
    setNewTask(e.target.value);
  };

  return (
    <div className="newTask">
      <div className="heading">
        <h1>Todolist App</h1>
      </div>
      <div className="newCard">
        <input
          type="text"
          className="newInput"
          placeholder="Add New Task..."
          onChange={handleNewTaskChange}
        />
        <button className="addButton" onClick={AddNewTask}>
          Add
        </button>
      </div>
    </div>
  );
};

export default NewTask;
