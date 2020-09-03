import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { UserType, CurrentUserType, CurrentUSrType } from "../types";


const mapState = ({ user }: UserType) => ({
    currentUser: user.currentUser
});

const useAuth = (): CurrentUSrType => {
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