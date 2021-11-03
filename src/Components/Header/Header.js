import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Header.module.css";

const Header = (props) => {
    const handleClickExit = () => {
        props.logout();
    };
    return (
        <div className={s.wrapper}>
            <div className={s.logo}>
                <NavLink className={s.logoLink} to='/todo-list'>
                    RR-TODO
                </NavLink>
            </div>
            {props.isAuth ? (
                <div className={s.login}>
                    <div className={s.itemLogin}>{props.login}</div>
                    <div className={s.dropDownMenu}>
                        <p onClick={handleClickExit} className={s.dropDownMenuItem}>
                            Exit
                        </p>
                    </div>
                </div>
            ) : (
                <div className={s.itemLogin}>
                    <NavLink className={s.loginLink} to='/login'>
                        Login
                    </NavLink>
                </div>
            )}
        </div>
    );
};

export default Header;
