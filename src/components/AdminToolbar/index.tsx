import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { checkUserIsAdmin } from '../../Utils';

import './styles.scss';


type UserType = {
    currentUser: {},
    resetPasswordSuccess: boolean,
    userErr: string[]
}

type currentUserType = {
    id: string | null,
    userRoles: string[] | null, 
    createDate: Date | null, 
    email: string | null, 
    displayName: string | null
}

const mapState = ({ user }: any) => ({
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