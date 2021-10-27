import React from "react";
import s from "./Modal.module.css";

const Modal = (props) => {
    return (
        <div className={s.wrapper}>
            <p className={s.text}>Task is delete</p>
            <p className={s.btnYes + " " + s.btn}>Yes</p>
            <p className={s.btnNo + " " + s.btn}>No</p>
        </div>
    );
};

export default Modal;
