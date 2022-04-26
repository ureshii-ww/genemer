import React, { forwardRef, TextareaHTMLAttributes } from 'react';
import './input-textarea.scss';

export interface StatusAreaProps
  extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'className'> {}

const StatusArea = forwardRef<HTMLTextAreaElement, StatusAreaProps>((props, ref) => {
  const baseClass = 'status-area';
  return <textarea {...props} ref={ref} placeholder="Введите свой статус" className={baseClass} />;
});

export default StatusArea;