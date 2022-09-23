import React, { useState } from "react";

const TaskCard = (props) => {
  const [edit, setEdit] = useState(false);
  const [changeTask, setChangeTask] = useState("");

  // calls the API with DELETE method as soon as "Delete" Button is clicked
  const HandleDelete = (e) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${e.target.value}`, {
      method: "DELETE",
    });
    e.target.parentElement.parentElement.remove();
  };

  // calls the API with PUT method as soon as the "Update" Button is clicked
  const HandleEdit = (e) => {
    if (!edit) {
      setEdit(true);
    } else if (changeTask !== "") {
      fetch(`https://jsonplaceholder.typicode.com/posts/${e.target.value}`, {
        method: "PUT",
        body: JSON.stringify({
          id: `${e.target.value}`,
          title: `${changeTask}`,
          userId: 1,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((json) => {
          console.log(json);
          alert(`Task updated to : ${json.title} `);
        });
      setEdit(false);
      setChangeTask("");
    } else {
      alert("No task changed");
      setEdit(false);
      setChangeTask("");
    }
  };

  // function to edit Task when the input field is changed
  const editTask = (e) => {
    setChangeTask(e.target.value);
  };

  return (
    // Div to all todos from API
    <div className="taskCard">
      {/* To check whether the task is completed or pending */}
      <div className={props.completed ? "completed" : "pending"} />
      {edit ? (
        <div className="taskInput">
          <input
            type="text"
            placeholder={props.title}
            onChange={editTask}
            className="taskText"
          />
        </div>
      ) : (
        <div className="task">
          <span> {props.title}</span>
        </div>
      )}

      <div className="buttonContainer">
        {/* Button to update the  existing task */}
        <button value={props.id} onClick={HandleEdit} className="button">
          Update
        </button>
        {/* Button to delete the task */}
        <button value={props.id} onClick={HandleDelete} className="button">
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskCard;
