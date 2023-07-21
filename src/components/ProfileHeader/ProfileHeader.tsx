import '../../css/global.css';
import './ProfileHeader.css';

import { ReactNode } from 'react';

export interface ProfileHeaderProps { 
  className: string;
  logo?: string | ReactNode;
  menu?: string | ReactNode | ReactNode[];
  popupMenu?: string | ReactNode | ReactNode[];
  children?: string | ReactNode | ReactNode[];
}

/**
 * Profile Header UI component
 */
export const ProfileHeader = ({
  ...props
}: ProfileHeaderProps) => {
  return (
    <div className="cdc-react">
      <header className={props.className}
      >
        {props.logo}
        {props.menu}
      </header>
      {props.popupMenu}
    </div>
  );
};
