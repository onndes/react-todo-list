import React from "react";
import s from "./PreloaderApp.module.css";
import preloaderApp from "../../img/preloaderApp.svg";
const PreloaderApp = () => {
    return (
        <div className={s.wrapper}>
            <img src={preloaderApp} alt='' />
        </div>
    );
};
export default PreloaderApp;
