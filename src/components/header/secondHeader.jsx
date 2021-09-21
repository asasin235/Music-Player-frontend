import React from "react";
import "./secondHeader.style.css";

const SecondHeader = ({title}) =>{
    return(
        <div className="logo-header">
            <div>
                <img src="" alt="logo" className="logo-image" />
            </div>
            <div>{title}</div>

        </div>
    );
};

export default SecondHeader;