import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { checkUserIsAdmin } from '../../Utils';

import './styles.scss';
import { UserType } from '../../types';


const mapState = ({ user }: UserType) => ({
    currentUser: user.currentUser
});

const AdminToolbar: FC = () => {
    const { currentUser } = useSelector(mapState);

    const isAdmin: boolean = checkUserIsAdmin(currentUser);
    if (!isAdmin) return null;

    return (
        <div className='adminToolbar'>
            <ul>
                <li>
                    <Link to="/admin">
                        My admin
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default AdminToolbar;