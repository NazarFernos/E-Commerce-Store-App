import React from 'react';
import { useSelector } from 'react-redux';
import './styles.scss';


const Orders = () => {
  const orders = useSelector(state => state.orders);
  console.log(orders)

  return (
			<div className="orders-list">
				<div className="basket-list">
					<div className="basket-header">
						<h3 className="basket-header-title">
							My Orders &nbsp;
							<span>({` ${orders.length} ${orders.length > 1 ? 'items' : 'item'}`})</span>
						</h3>
					</div>
        <div className="order-item">
          <div className="items">
            <div>
              User Name
            </div>
            <div>
              Mobile Number
            </div>
            <div>
              Delvery City
            </div>
            <div>
              Post Office
            </div>              
          </div>

        </div>
				</div>
				
			</div>
	);
};

export default Orders;
