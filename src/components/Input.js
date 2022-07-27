import React from 'react';
import { useState } from "react";

function Input({setWorries}) {
    const [input, setInput] = useState("");
    const handleOnChange = (e) => {
        setInput(e.target.value);
    }
    const handleSubmitClick = (e) => {
        e.preventDefault();
        if (!input) {
            alert("고민을 입력해주세요.");
        } else {
        setWorries(input);
        setInput("");
        }
    }

    return (
        <div className="input-container">
            <textarea className="textarea-box" value={input} onChange={handleOnChange} placeholder="고민을 입력하세요" />
            <button className="submit-button" onClick={handleSubmitClick}>암살 의뢰</button>
        </div>
    )
}

export default Input;