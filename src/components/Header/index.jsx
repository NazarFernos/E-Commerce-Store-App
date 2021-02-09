import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './styles.scss';
import {Link} from 'react-router-dom';

import logo from './../../assets/logo.png';
import { signOutUserStart } from '../../redux/User/user.actions';
import { selectCartItemsCount } from '../../redux/Cart/cart.selectors';


const mapState = (state) => ({
    currentUser: state.user.currentUser,
    totalNumCartItems: selectCartItemsCount(state)
});

const Header = () => {
    const dispatch = useDispatch();
    const { currentUser, totalNumCartItems } = useSelector(mapState);

    const signOut = () => {
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

                <nav>
                    <ul>
                        <li>
                            <Link to="/">
                                Home
                            </Link>
                        </li>
                    
                    
                        <li>
                            <Link to="/search">
                                Search
                            </Link>
                        </li>
                    </ul>
                </nav>

                <div className="callToActions">

                    <ul>

                        <li>
                            <Link to="/cart">
                                Cart ({totalNumCartItems})
                            </Link>
                        </li>
                        {currentUser && [
                                <li>
                                    <Link to="/dashboard">
                                        My account
                                    </Link>
                                </li>,
                                <li>
                                    <span onClick={() => signOut()}>
                                        Log Out
                                    </span>
                                </li>
                        ]}
                    

                        {!currentUser && [
                            <li>
                                <Link to="/registration">
                                    Register
                                </Link>
                            </li>,
                            <li>
                                <Link to="/login">
                                    Login
                                </Link>
                            </li>
                        ]}
                    </ul>
                </div>
            </div>
        </header>
    );
};

Header.defaultProps = {
    currentUser: null
};

export default Header;