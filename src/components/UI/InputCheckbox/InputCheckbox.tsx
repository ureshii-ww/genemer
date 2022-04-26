import React, { forwardRef, InputHTMLAttributes } from 'react';
import './input-checkbox.scss';

export interface InputCheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  title: string;
}

const InputCheckbox = forwardRef<HTMLInputElement, InputCheckboxProps>(
  ({ title, ...props }, ref) => {
    const baseClass = 'input-checkbox';
    const classString = props.className ? `${props.className} ${baseClass}` : baseClass;

    return (
      <div className={`${baseClass}__wrapper`}>
        <input type="checkbox" {...props} ref={ref} className={classString} />
        <label className={`${baseClass}__label`} htmlFor={props.name}>
          {title}
        </label>
      </div>
    );
  }
);
export default InputCheckbox;
