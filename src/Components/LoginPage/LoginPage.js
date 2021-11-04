import React from "react";
import { Field, Form } from "react-final-form";
import s from "./LoginPage.module.css";
import cn from "classnames";

const LoginPage = (props) => {
    const handleSubmit = (data) => {
        props.login(data);
    };
    return (
        <div className={s.wrapper}>
            <LoginPageForm handleSubmit={handleSubmit} />
        </div>
    );
};

const LoginPageForm = (props) => {
    const requiredFill = (value) => {
        if (value) {
            return undefined;
        } else {
            return "Required to fill";
        }
    };

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
                                <Field
                                    name='email'
                                    validate={requiredFill}
                                    render={({ input, meta }) => {
                                        return (
                                            <>
                                                <input
                                                    type='text'
                                                    {...input}
                                                    className={cn(s.input, {
                                                        [s.inputErrorRequired]:
                                                            meta.error && meta.touched,
                                                    })}
                                                />
                                                {meta.error && meta.touched && (
                                                    <p className={s.textError}>{meta.error}</p>
                                                )}
                                            </>
                                        );
                                    }}
                                />
                            </div>
                            <div className={s.wrapperBlock}>
                                <label className={s.label}>Password</label>
                                <Field
                                    validate={requiredFill}
                                    name='password'
                                    render={({ input, meta }) => {
                                        return (
                                            <>
                                                <input
                                                    type='password'
                                                    {...input}
                                                    className={cn(s.input, {
                                                        [s.inputErrorRequired]:
                                                            meta.error && meta.touched,
                                                    })}
                                                />
                                                {meta.error && meta.touched && (
                                                    <p className={s.textError}>{meta.error}</p>
                                                )}
                                            </>
                                        );
                                    }}
                                />
                            </div>
                            <div className={s.wrapperBlock + " " + s.wrapperBlockCheckBox}>
                                <label className={s.label}>Remember me</label>
                                <Field
                                    name='rememberMe'
                                    type='checkbox'
                                    className={s.input}
                                    component='input'
                                />
                            </div>
                            <button className={s.btn} type='submit'>
                                Login
                            </button>
                        </form>
                    </div>
                );
            }}
        />
    );
};

export default LoginPage;
