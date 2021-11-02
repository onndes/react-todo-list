import React from "react";
import { Field, Form } from "react-final-form";
import s from "./LoginPage.module.css";

const LoginPage = () => {
    const handleSubmit = (data) => {};
    return (
        <div className={s.wrapper}>
            <LoginPageForm handleSubmit={handleSubmit} />
        </div>
    );
};

const LoginPageForm = (props) => {
    return (
        <Form
            onSubmit={props.handleSubmit}
            render={(props) => {
                return (
                    <div className={s.wrapper}>
                        <form
                            onSubmit={(e) => {
                                props.handleSubmit(e);
                            }}
                            className={s.form}>
                            <div className={s.wrapperBlock}>
                                <label className={s.label}>Login</label>
                                <Field name='login' type='text' className={s.input} component='input'></Field>
                            </div>
                            <div className={s.wrapperBlock}>
                                <label className={s.label}>Password</label>
                                <Field name='password' type='password' className={s.input} component='input'></Field>
                            </div>
                            <div className={s.wrapperBlock + " " + s.wrapperBlockCheckBox}>
                                <label className={s.label}>Remember me</label>
                                <Field name='password' type='checkbox' className={s.input} component='input'></Field>
                            </div>
                            <button className={s.btn} type='submit'>Login</button>
                        </form>
                    </div>
                );
            }}
        />
    );
};

export default LoginPage;
