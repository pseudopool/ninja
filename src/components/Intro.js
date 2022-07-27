import React from 'react';
import {Link} from "react-router-dom";

function Intro({setLogin}) {
    const handleButtonClick = () => {
        setLogin(true);
    }

    return (
        <div className="start-button-container">
            <img className="ninja-img" alt="ninja" src="https://github.com/pseudopool/ninja/blob/master/ninja.png?raw=true"></img>
            <p className="intro-txt">
                NINJA 
                WORRY 
                ASSASSIN
            </p>
            <Link to="/main">
            <button className="start-button" onClick={handleButtonClick}>시작하기</button>
            </Link>
        </div>
    )
}

export default Intro;