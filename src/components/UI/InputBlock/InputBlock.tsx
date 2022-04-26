import React, { FC } from 'react';

interface InputBlockProps {
  label: string;
  name: string;
  input: JSX.Element;
  error?: string;
  annotation?: string;
  className?: string;
}

const InputBlock: FC<InputBlockProps> = ({ label, name, input, error, className, annotation }) => {
  const baseClass = 'input-block';
  const classString = className ? `${baseClass} ${className}` : baseClass;

  return (
    <div className={classString}>
      <label className="input-block__label" htmlFor={name}>
        {label}
      </label>
      <div className="input-block__input-wrapper">
        <div className="input-block__input">{input}</div>
        {error && <p className="input-block__error">{error}</p>}
      </div>
      {annotation && (
        <div className="input-block__annotation-wrapper">
          <p className="input-block__annotation">{annotation}</p>
        </div>
      )}
    </div>
  );
};

export default InputBlock;
