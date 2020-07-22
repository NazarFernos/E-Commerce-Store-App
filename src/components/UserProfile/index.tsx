import React, { FC } from 'react';
import './styles.scss';
import userIMG from './../../assets/user.png';

type UserProfileType = {
  props?: React.ReactNode,
  children?: React.ReactNode,
  currentUser: any
}

const UserProfile: FC<UserProfileType> = props => {
  const { currentUser }: any = props;
  const { displayName }: any = currentUser;

  return (
    <div className="userProfile">
      <ul>
        <li>
          <div className="img">
            <img src={userIMG} />
          </div>
        </li>
        <li>
          <span className="displayName">
            {displayName && displayName}
          </span>
        </li>
      </ul>
    </div>
  );
}

export default UserProfile;