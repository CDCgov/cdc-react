import './ProfileHeader.scss';

export interface ProfileHeaderProps { 
  className: string;
  logo?: string | JSX.Element;
  menu?: string | JSX.Element | JSX.Element[];
  popupMenu?: string | JSX.Element | JSX.Element[];
  children?: string | JSX.Element | JSX.Element[];
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
