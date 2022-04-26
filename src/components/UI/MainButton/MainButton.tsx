import React, { ButtonHTMLAttributes, FC } from 'react';

interface MainButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const MainButton: FC<MainButtonProps> = ({ className, children, ...props }) => {
  const baseClass = 'main-button';
  const classString = className ? `${className} ${baseClass}` : baseClass;

  return (
    <button {...props} className={classString}>
      {children}
    </button>
  );
};

export default MainButton;