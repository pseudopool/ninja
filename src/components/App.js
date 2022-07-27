import Intro from "./Intro";
import Main from "./Main";
import React, {useState} from "react";
import "./App.css";

function App() {
  const [login, setLogin] = useState(false);

  return (
    <div className="display-container">
      {login ? <Main /> : <Intro setLogin={setLogin}/>}
    </div>
  );
}

export default App;