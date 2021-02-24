import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import OrderHistory from '../../components/OrderHistory';
import { getUserOrderHistory } from '../../redux/Orders/orders.actions';

import './styles.scss';


const mapState = ({ user, ordersData }) => ({
    currentUser: user.currentUser,
    orderHistory: ordersData.orderHistory.data
});

const Dashboard = props => {
    const dispatch = useDispatch();
    const { currentUser, orderHistory } = useSelector(mapState);
    console.log(orderHistory)

    useEffect(() => {
        dispatch(
            getUserOrderHistory(currentUser.id)
        );
    }, []);
    return (
        <div>
            <h1>
                Order History
            </h1>

            <OrderHistory orders={orderHistory} />
        </div>
    );
};

export default Dashboard;