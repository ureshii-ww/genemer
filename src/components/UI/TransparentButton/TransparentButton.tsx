import React, { ButtonHTMLAttributes, FC } from 'react';
import './transparent-button.scss';

interface TransparentButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const TransparentButton: FC<TransparentButtonProps> = ({ children, className, ...props }) => {
  const baseClass = 'transparent-button';
  const classString = className ? `${baseClass} ${className}` : baseClass;

  return (
    <button {...props} className={classString}>
      {children}
    </button>
  );
};

export default TransparentButton;
