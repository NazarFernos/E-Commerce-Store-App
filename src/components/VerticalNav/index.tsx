import React, { FC } from 'react';
import { useSelector } from 'react-redux'
import UserProfile from '../UserProfile';
import './styles.scss';
import { UserType } from '../../types';


type VerticalNavType = {
  children?: React.ReactNode
}

const mapState = ({ user }: UserType) => ({
  currentUser: user.currentUser
})

const VerticalNav: FC<VerticalNavType> = ({ children }) => {
  const { currentUser } = useSelector(mapState);

  const configUserProfile = {
    currentUser
  }

  return (
    <div className="verticalNav">

      <UserProfile {...configUserProfile} />

      <div className="menu">
        {children}
      </div>
    </div>
  );
}

export default VerticalNav;