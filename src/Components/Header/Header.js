import React from "react";
import s from "./Header.module.css";

const Header = () => {
    return (
        <div className={s.wrapper}>
            <div className={s.logo}>TODO</div>
            <div className={s.login}>Login</div>
        </div>
    );
};

export default Header;
