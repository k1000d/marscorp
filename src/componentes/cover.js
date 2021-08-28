import React from "react";

import "../App.css";
import mars from "../video/mars.mp4";


const Cover = ()  => {
    return( <div className= "cover-container">
        <video className="video" src={mars} autoPlay loop muted/>

    </div>
    )
};

export default Cover;