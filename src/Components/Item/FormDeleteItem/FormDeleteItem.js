import React from "react";
import s from "../Item.module.css";

const FormDeleteItem = ({ id, setDeleteItem, deleteSubmitItem }) => {
    return (
        <li key={id} className={s.item + " " + s.itemDeleteForm}>
            <p className={s.text + " " + s.textDeleteForm}>Delete this task?</p>

            <div
                onClick={() => deleteSubmitItem(id)}
                className={s.wrapperFormBtnDelete + " " + s.wrapperBtn}></div>
            <div
                onClick={() => setDeleteItem(null)}
                className={s.wrapperFormBtnNotDelete + " " + s.wrapperBtn}></div>
        </li>
    );
};

export default FormDeleteItem;
