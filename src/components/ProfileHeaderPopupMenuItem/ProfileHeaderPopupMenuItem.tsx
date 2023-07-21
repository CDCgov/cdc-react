import { EventHandlerType } from '../../@types';

import './ProfileHeaderPopupMenuItem.css'

import { ReactNode } from 'react';

interface ProfileHeaderPopupMenuItemProps { 
  className: string;
  children: string | ReactNode | ReactNode[];
  onClick?: EventHandlerType;
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
