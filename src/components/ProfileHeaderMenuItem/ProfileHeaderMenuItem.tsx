import './ProfileHeaderMenuItem.css'

import { MouseEventHandler } from 'react';

interface ProfileHeaderMenuItemProps { 
  className: string;
  children: string | JSX.Element | JSX.Element[];
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
}

export const ProfileHeaderMenuItem = ({
  ...props
}: ProfileHeaderMenuItemProps) => {
  return (
    <button className={props.className} onClick={props.onClick}>
      {props.children}
    </button>
  );
};
