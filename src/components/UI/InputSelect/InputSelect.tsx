import React, { forwardRef, SelectHTMLAttributes } from 'react';

export interface InputSelectProps extends SelectHTMLAttributes<HTMLSelectElement> {}

const InputSelect = forwardRef<HTMLSelectElement, InputSelectProps>(
  ({ children, ...props }, ref) => {
    const baseClass = 'input-select';
    const classString = props.className ? `${props.className} ${baseClass}` : baseClass;
    
    return (
      <select {...props} ref={ref} className={classString}>
        {children}
      </select>
    );
  }
);
export default InputSelect;