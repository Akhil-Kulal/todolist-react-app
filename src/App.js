import React, { useEffect, useState } from "react";
import "./assets/App.css";
import NewTask from "./components/NewTask";
import TaskCard from "./components/TaskCard";

function App() {
  const [items, setitems] = useState([]);
  const [DataisLoaded, setDataisLoaded] = useState(false);

  // fetches the tasks list from API as soon as the window is loaded and stores the response in an array
  useEffect(() => {
    fetch(" https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then(
        (json) => setitems(json),
        setDataisLoaded(true),
        console.log(items)
      );
  }, []);

  return (
    <div className="App">
      {/* To add new tasks */}
      <NewTask />
      <h1>TODO LIST</h1>

      {/* iterates through the array and calls TaskCard and sends the required details as props */}
      {items.map((item) => (
        <TaskCard
          key={item.id}
          title={item.title}
          completed={item.completed}
          id={item.id}
        />
      ))}
    </div>
  );
}

export default App;
