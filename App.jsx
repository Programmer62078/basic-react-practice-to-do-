import React from "react"; // Optional, but good to include if using JSX syntax
import "./App.css"; // Ensure this CSS file exists and is correctly located
import Salju from "./todo"; // Import the Salju component from the correct path

function App() {
  return (
    <div className="App">
      <Salju /> {/* Render the Salju component */}
    </div>
  );
}

export default App;
