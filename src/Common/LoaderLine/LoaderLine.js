import React from "react";
import s from "./LoaderLine.module.css";

const LoaderLine = (props) => {
    const { height = "2px", color = "black", time = "3s" } = props;

    const styleLine = {
        height: height,
        backgroundColor: color,
        animationDuration: time,
    };

    return (
        <div className={s.wrapper}>
            <div className={s.line} style={styleLine}></div>
        </div>
    );
};

export default LoaderLine;
