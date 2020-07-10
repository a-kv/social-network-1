import React from "react";
import classes from './FormsControl.module.css';
import {Field} from "redux-form";

const FormControl = ({input, meta:{touched, error}, children}) => { //таким способом мы достаем из пропсов всё, кроме мета и инпута

    const hasError = touched && error
    return (
        <div className={classes.formControl + " " + (hasError ? classes.error : "")}>
            <div>
                {children}
            </div>
            {hasError && <span>{error}</span>}
        </div>
    )
}

export const Textarea = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props}><textarea {...input} {...restProps}/></FormControl>
}
export const Input = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props}><input {...input} {...restProps}/></FormControl>

}
export const createField = (placeholder, name, validator, component, props = {}, text = '') =>(
    <div><Field placeholder={placeholder} component={component} name={name}
           validate={validator}
        {...props}/>{text}</div>
)