import React, { forwardRef, InputHTMLAttributes } from 'react';

export interface InputCheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  title: string;
}

const InputCheckbox = forwardRef<HTMLInputElement, InputCheckboxProps>(
  ({ name, title, ...props }, ref) => {
    const baseClass = 'input-checkbox';
    const classString = props.className ? `${props.className} ${baseClass}` : baseClass;

    return (
      <div className={`${baseClass}__wrapper`}>
        <input type="checkbox" {...props} ref={ref} className={classString} />
        <label className={`${baseClass}__label`} htmlFor={name}>
          {title}
        </label>
      </div>
    );
  }
);
export default InputCheckbox;
