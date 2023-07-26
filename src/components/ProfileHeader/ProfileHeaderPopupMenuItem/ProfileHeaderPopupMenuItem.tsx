import './ProfileHeaderPopupMenuItem.scss'

import { MouseEventHandler } from 'react';

interface ProfileHeaderPopupMenuItemProps { 
  className: string;
  children: string | JSX.Element | JSX.Element[];
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
}

export const ProfileHeaderPopupMenuItem = ({
  ...props
}: ProfileHeaderPopupMenuItemProps) => {

  return (
    <button className={props.className} onClick={props.onClick}>
      {props.children}
    </button>
    );
};
