import React, { FC } from 'react';
import './styles.scss';
import { FormInputType } from '../../../types';


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