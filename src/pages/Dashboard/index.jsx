import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserOrderHistory } from '../../redux/Orders/orders.actions';
import './styles.scss';


const mapState = ({ user }) => ({
    currentUser: user.currentUser
});

const Dashboard = props => {
    const dispatch = useDispatch();
    const { currentUser } = useSelector(mapState);

    useEffect(() => {
        dispatch(
            getUserOrderHistory(currentUser.id)
        );
    }, []);
    return (
        <h1>
            Your loggin in!
        </h1>
    );
};

export default Dashboard;