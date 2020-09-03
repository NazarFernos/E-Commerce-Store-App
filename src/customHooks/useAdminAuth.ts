import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { checkUserIsAdmin } from '../Utils';
import { useHistory } from 'react-router-dom';
import { UserType, CurrentUserType, CurrentUSrType } from '../types';


const mapState = ({ user }: UserType) => ({
    currentUser: user.currentUser
});

const useAdminAuth = (): CurrentUSrType => {
    const { currentUser } = useSelector(mapState);
    const history = useHistory();

    useEffect(() => {
        if (!checkUserIsAdmin(currentUser)) {
            history.push('/login');
        }
    }, [currentUser]);

    return currentUser;
}

export default useAdminAuth;