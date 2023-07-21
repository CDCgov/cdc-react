import { EventHandlerType } from '../../@types';

import './ProfileHeaderMenuItem.css'

import { ReactNode } from 'react';

interface ProfileHeaderMenuItemProps { 
  className: string;
  children: string | ReactNode | ReactNode[];
  onClick?: EventHandlerType;
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
