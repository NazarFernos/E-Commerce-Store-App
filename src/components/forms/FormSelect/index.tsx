import React, { FC } from 'react';
import './styles.scss';


type FormSelectType = {
  options: { value: string; name: string; }[]; 
  defaultValue?: string,
  handleChange: (e: any) => void;
  label: string,
}

const FormSelect: FC<FormSelectType> = ({ options, defaultValue, handleChange, label, ...otherProps }) => {
  if (!Array.isArray(options) || options.length < 1) return null;

  return (
    <div className="formRow">
      {label && (
        <label>
          {label}
        </label>
      )}

      <select className="formSelect" value={defaultValue} onChange={handleChange} {...otherProps}>
        {options.map((option, index) => {
          const { value, name } = option;

          return (
            <option key={index} value={value}>{name}</option>
          );
        })}
      </select>
    </div>
  );
}

export default FormSelect;