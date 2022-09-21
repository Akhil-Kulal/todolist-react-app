import React, { Component } from "react";

class NewTask extends Component {
  render() {
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
          />
          <button className="addButton">Add</button>
        </div>
      </div>
    );
  }
}

export default NewTask;
