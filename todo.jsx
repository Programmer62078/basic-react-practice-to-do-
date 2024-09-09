import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
function Salju() {
  let [todos, setTodos] = useState(["sample task"]);
  let [newtodos, setNewtodos] = useState(""); // Fixed: useState instead of userState, and initialized with an empty string

  let addnewtask = () => {
    if (newtodos.trim() !== "") {
      // Optional: Prevent adding empty tasks
      setTodos([...todos, newtodos]);
      setNewtodos("");
    }
  };

  let updatetodovalue = (event) => setNewtodos(event.target.value); // Corrected update function

  return (
    <div>
      <input
        placeholder="add a new task"
        value={newtodos}
        onChange={updatetodovalue}
      />
      <br />
      <br />
      <button onClick={addnewtask}> add new task </button>
      <br />
      <br />
      <br />
      <hr />
      <h4> task todo</h4>
      <ul>
        {todos.map(
          (
            todo,
            index // Corrected to use parentheses for implicit return
          ) => (
            <li key={index}>{todo}</li> // Added a key for each list item
          )
        )}
      </ul>
    </div>
  );
}

export default Salju;
