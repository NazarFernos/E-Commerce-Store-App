import React, { FC } from 'react';
import './styles.scss';

type FormInputType = {
    handleChange?: (e: any) => void,
    label?: string,
    type?: string,
    name?: string,
    value?: number | string | undefined,
    placeholder?: string,
    min?: string,
    max?: string,
    step?: string
}
const FormInput: FC<FormInputType> = ({ handleChange, label, ...otherProps }) => {
    return (
        <div className="formRow">
            {label && (
                <label>
                    {label}
                </label>
            )}

            <input className="formInput" onChange={handleChange} {...otherProps} />
        </div>
    );
}

export default FormInput;