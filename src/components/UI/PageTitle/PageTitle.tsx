import React, { FC } from 'react';
import './page-title.scss';

interface PageTitleProps {
  greeting: string;
  username: string;
}

const PageTitle: FC<PageTitleProps> = ({ greeting, username }) => {
  const baseClass = 'page-title';

  return (
    <h1 className={baseClass}>
      <span className={`${baseClass}__greeting`}>{greeting}</span>
      <span className={`${baseClass}__username`}>{username}</span>
    </h1>
  );
};

export default PageTitle;