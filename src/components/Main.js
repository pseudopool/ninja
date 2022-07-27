import React from 'react';
import Input from "./Input";
import Worries from "./Worries";
import { useState } from "react";

function Main() {
    const [worries, setWorries] = useState("");

    return (
      <div className="worries-container">
        <p className="worries-title">🥷 고민 암살 의뢰서 🥷</p>
      <Input setWorries={setWorries} />
      <Worries setWorries={setWorries} worries={worries}/>
      </div>
    )
  }

  export default Main;