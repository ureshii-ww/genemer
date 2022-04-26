import React, { forwardRef, HTMLAttributes } from 'react';
import './status-area.scss';

export interface StatusAreaProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'className'> {
}

const StatusArea = forwardRef<HTMLDivElement, StatusAreaProps>((props, ref) => {
  const baseClass = 'status-area';
  return <div {...props} ref={ref} placeholder="Введите свой статус" className={baseClass} />;
});

export default StatusArea;
