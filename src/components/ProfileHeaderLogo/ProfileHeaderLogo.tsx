import './ProfileHeaderLogo.css'
import { createElement, ReactNode, useState } from 'react';

type ProfileHeaderLogoImageEventHandler = ((this: GlobalEventHandlers, ev: Event) => any) | null;

interface ProfileHeaderLogoProps {
  image: ReactNode | string;
  classNames?: string[];
  onLoad?: ProfileHeaderLogoImageEventHandler;
}

const getProfileHeaderLogoImageFromProps = (logoImage: any, classNames?: string[], onLoad?: ProfileHeaderLogoImageEventHandler) => {
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
