import React from "react";
import "./YouTubeComp.css";

const YouTubeComp = ({
    time = "00:00",
    title = "Title Here",
    desc = "xx views xx days ago"
}) => {
    return (
        <div className="youtube-wrapper">
            <div className="img-thumb">
                <img src={require("../../assets/thumb.png")} alt="thumbnail" />
                <p className="time">{time}</p>
            </div>
            <p className="title">{title}</p>
            <p className="desc">{desc}</p>
        </div>
    );
};
export default YouTubeComp;
