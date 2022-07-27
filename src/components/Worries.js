import { Link } from "react-router-dom";
import React from 'react';

function Worries({setWorries, worries}) {
    const ninjaMode = "하이야! 성공적으로 암살했습니다.";
    const handleDeleteClick = (e) => {
        setWorries(ninjaMode);
    }
    const deleteButton = () => {
        return (
        <button 
        className="delete-button"
        onClick={handleDeleteClick}>
        닌자 부르기 </button>
        )
    }
    const goBackButton = () => {
        return (
        <Link to="/">
            <button className="goBackButton">
                처음으로
            </button>
        </Link>
        )
    }

    if (worries) {
        return (
        <div className="worries-container">
            <p className="content-title">오늘 암살할 고민 ⬇︎</p>
            <div className="worry-container">
                <p className="worry-content">{worries}</p>
            </div>
        {worries === ninjaMode ? goBackButton() : deleteButton()}
        </div>
        )
    }
}

export default Worries;