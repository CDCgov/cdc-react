import { EventHandlerType } from '../../@types';

import './ProfileHeaderLogo.css'

import { createElement, ReactNode } from 'react';

interface ProfileHeaderLogoProps {
  image: ReactNode | string;
  classNames?: string[];
  onLoad?: EventHandlerType;
}

const getProfileHeaderLogoImageFromProps = (logoImage: any, classNames?: string[], onLoad?: EventHandlerType) => {
  if (typeof logoImage === 'string') {
    return createElement('img',
      { className: (classNames || [])?.join(' '), onLoad: onLoad, src: logoImage }
    )
  } else {
    return logoImage;
  }
}

export const ProfileHeaderLogo = ({
  ...props
}: ProfileHeaderLogoProps) => {
  const { image, classNames, onLoad } = props;

  const profileHeaderLogoImage = getProfileHeaderLogoImageFromProps(image, classNames, onLoad);

  return (
    <div className="profile-header-logo-wrap">
      {profileHeaderLogoImage}
    </div>
  );
};
