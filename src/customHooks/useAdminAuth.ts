import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { checkUserIsAdmin } from '../Utils';
import { useHistory } from 'react-router-dom';


const mapState = ({ user }: any) => ({
    currentUser: user.currentUser
});

const useAdminAuth = (props: any) => {
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