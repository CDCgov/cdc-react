interface ProfileHeaderProps { }

import './ProfileHeader.css'
import { useState } from 'react';

import { ProfileHeaderLogo } from '../ProfileHeaderLogo/ProfileHeaderLogo';
import { Icon } from '../Icon/Icon';
/**
 * Profile Header UI component for DEX CDC Portal
 */
export const ProfileHeader = ({
  ...props
}: ProfileHeaderProps) => {
  const [profileHeaderPopupOpen, setProfileHeaderPopupOpen] = useState(false);
  const [profileHeaderNotifications, setProfileHeaderNotifications] = useState([{ type: 'alert' }]);

  return (
    <div className="cdc-react">
      <header
        {...props}
        className="profile-header"
      >
        <ProfileHeaderLogo image="../test.png" />
        <div className="profile-header-menu-items">
          <button className="profile-header-menu-item notifications-list-item">
            <Icon name="notifications" hasBadge={profileHeaderNotifications.length > 0} />
          </button>
          <button className="profile-header-menu-item settings-list-item">
            <Icon name="settings" />
          </button>
          <button className="profile-header-menu-item user-profile" onClick={() => setProfileHeaderPopupOpen(e => !e)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 40 40" fill="none" className="user-image" stroke="#ddd">
              <circle cx="20" cy="20" r="20"></circle>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none" className="chevron-down">
              <path d="M5.25 7.5L9 10.9091L12.75 7.5" stroke="#333333" strokeLinecap="round"></path>
            </svg>
          </button>
        </div>
      </header>
      <div className="cdc-react profile-header-popup-wrap" style={{ display: (!profileHeaderPopupOpen ? 'none' : ' flex') }}>
        <div className="profile-header-popup">
          <button className="profile-header-popup-menu-item">
            <span className="profile-header-popup-menu-item-left">
              <Icon name="profile"/>
            </span>
            <span className="profile-header-popup-menu-item-center">
              Your Profile
            </span>
          </button>
          <button className="profile-header-popup-menu-item">
            <span className="profile-header-popup-menu-item-left">
              <Icon name="notifications"/>
            </span>
            <span className="profile-header-popup-menu-item-center">
              Notifications
            </span>
            <span className="profile-header-popup-menu-item-right">
              <svg className="notification-count" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <circle cx="10" cy="12" r="10" fill="#AF4448" style={{ display: profileHeaderNotifications.length > 0 ? 'flex' : 'none' }}></circle>
                <text style={{ display: profileHeaderNotifications.length > 0 ? 'flex' : 'none' }} alignmentBaseline="middle" x="10" y="12.5" textAnchor="middle">{profileHeaderNotifications.length}</text>
              </svg>
            </span>
          </button>
          <button className="profile-header-popup-menu-item">
            <span className="profile-header-popup-menu-item-left">
              <Icon name="settings" />
            </span>
            <span className="profile-header-popup-menu-item-center">
              Settings
            </span>
          </button>
          <button className="profile-header-popup-menu-item">
            <span className="profile-header-popup-menu-item-left">
              <Icon name="logout" />
            </span>
            <span className="profile-header-popup-menu-item-center">
              Logout
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};
