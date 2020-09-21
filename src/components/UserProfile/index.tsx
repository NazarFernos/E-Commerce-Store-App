import React, { FC } from 'react';
import './styles.scss';
import userIMG from './../../assets/user.png';
import { UserProfileType } from '../../types';



const UserProfile: FC<UserProfileType> = props => {
  const { currentUser } = props;
  const { displayName } = currentUser;


  return (
    <div className="userProfile">
      <ul>
        <li>
          <div className="img">
            <img src={userIMG} alt="user_image" />
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