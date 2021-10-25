import { Form, Field } from "react-final-form";
import s from "../Item.module.css";

const FormRenameItem = (props) => {
    return (
        <Form
            onSubmit={props.handleSubmit}
            initialValues={{ bodyRenameTodo: props.initialValues }}
            validate={(values) => {
                const errors = {};
                if (values.bodyRename && values.bodyRename.length > props.maxLength) {
                    errors.bodyRename = `Max length name ${props.maxLength}`;
                }
                return errors;
            }}
            render={({ handleSubmit, key, errors }) => (
                <div>
                    {errors && <p className={s.errors}>{errors.bodyRename}</p>}
                    <form key={key} onSubmit={handleSubmit} className={s.item + " " + s.itemForm}>
                        <Field
                            className={s.text + " " + s.textForm}
                            name='bodyRename'
                            component='input'
                        />
                        <button
                            type='submit'
                            className={s.wrapperBtnSubmitRename + " " + s.wrapperBtn}></button>
                        <div
                            onClick={props.handleNotSubmitRename}
                            className={s.wrapperBtnNotSubmitRename + " " + s.wrapperBtn}></div>
                    </form>
                </div>
            )}
        />
    );
};

export default FormRenameItem;
