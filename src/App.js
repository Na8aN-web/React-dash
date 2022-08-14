import React from "react";
import Sidebar from './components/Sidebar';
import Main from "./components/Main";
import '../src/App.css'

function App() {
  return (
    <div className="App">
      <div className="main">
        <Sidebar />
        <Main />
      </div>
    </div>
  );
}

export default App;
