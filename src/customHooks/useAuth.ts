import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";

const mapState = ({ user }: any) => ({
    currentUser: user.currentUser
});

const useAuth = (props: any) => {
    const { currentUser } = useSelector(mapState);
    const history = useHistory();

    useEffect(() => {
        if(!currentUser) {
            history.push('/login');
        }
        
    }, [currentUser]);

    return currentUser;
};

export default useAuth;