import React, { forwardRef, InputHTMLAttributes } from 'react';
import './input-text.scss';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  mode?: 'red';
}

const InputText = forwardRef<HTMLInputElement, InputProps>(({ className, mode, ...props }, ref) => {
  const baseClass = 'input-text';
  const classString =
    className && mode
      ? `${className} ${baseClass} ${baseClass}--${mode}`
      : className
      ? `${className} ${baseClass}`
      : baseClass;

  return <input {...props} ref={ref} className={classString} />;
});

export default InputText;
