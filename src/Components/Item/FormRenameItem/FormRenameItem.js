import { Form, Field } from "react-final-form";
import s from "../Item.module.css";

const FormRenameItem = (props) => {
    return (
        <Form
            onSubmit={props.handleSubmit}
            initialValues={{ bodyRenameTodo: props.initialValues }}
            render={({ handleSubmit, key }) => (
                <form key={key} onSubmit={handleSubmit} className={s.item + " " + s.itemForm}>
                    <Field
                        className={s.text + " " + s.textForm}
                        name='bodyRenameTodo'
                        component='input'
                    />
                    <button
                        type='submit'
                        className={s.wrapperBtnSubmitRename + " " + s.wrapperBtn}></button>
                    <div
                        onClick={props.handleNotSubmitRename}
                        className={s.wrapperBtnNotSubmitRename + " " + s.wrapperBtn}></div>
                </form>
            )}
        />
    );
};

export default FormRenameItem;
