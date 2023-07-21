import { ImageOnLoadEventHandlerType } from '../../@types';

import './ProfileHeaderLogo.css'

import { createElement } from 'react';

interface ProfileHeaderLogoProps {
  image: JSX.Element | string;
  classNames?: string[];
  onLoad?: ImageOnLoadEventHandlerType;
}

const getProfileHeaderLogoImageFromProps = (logoImage: JSX.Element | string, classNames?: string[], onLoad?: ImageOnLoadEventHandlerType) => {
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
