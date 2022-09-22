import React, { useEffect, useState } from "react";
import "./assets/App.css";
import NewTask from "./components/NewTask";

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
      <NewTask />
    </div>
  );
}

export default App;
