import React, { FC } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './styles.scss';
import {Link} from 'react-router-dom';

import logo from './../../assets/logo.png';
import { signOutUserStart } from '../../redux/User/user.actions';


const mapState = ({ user }: any) => ({
    currentUser: user.currentUser
});

const Header: FC = props => {
    const dispatch = useDispatch();
    const { currentUser } = useSelector(mapState);

    const signOut = (): void => {
        dispatch(signOutUserStart());
    };

    return (
        <header className="header">
            <div className="wrap">
                <div className="logo">
                    <Link to="/">
                        <img src={logo} alt='simpleTutLogo'/>
                    </Link>
                </div>

                <div className="callToActions">

                    {currentUser && (
                        <ul>
                            <li>
                                <Link to="/dashboard">
                                    My account
                                </Link>
                            </li>
                            <li>
                                <span onClick={() => signOut()} style={{cursor: 'pointer'}}>
                                    Log Out
                                </span>
                            </li>
                        </ul>
                    )}

                    {!currentUser && (
                        <ul>
                         <li>
                            <Link to="/registration">
                                Register
                            </Link>
                         </li>
                         <li>
                            <Link to="/login">
                                Login
                            </Link>
                         </li>
                     </ul>
                    )}
                </div>
            </div>
        </header>
    );
};

Header.defaultProps = {
    currentUser: null
};

export default Header;