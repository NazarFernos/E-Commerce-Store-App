import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './styles.scss';
import Button from '../../components/forms/Button';
//import { removeFromBasket, clearBasket, addQtyItem, minusQtyItem } from '../../redux/Cart/cart.actions';
import { Link } from 'react-router-dom';
import Checkout from '../../components/Checkout';


const Cart = (props) => {
	// const basket = useSelector(state => state.basket);
    // const dispatch = useDispatch();

    // const onRemoveFromBasket = (props) => dispatch(removeFromBasket(props));

    // const onClearBasket = () => {
	// 	if (basket.length) {
	// 		dispatch(clearBasket());
	// 	}
	// };
    
    
	// const calculateTotal = () => {
	// 	let total = 0;

	// 	if (basket.length !== 0) {
	// 		const result = basket.map(product => product.productPrice * product.quantity).reduce((a, b) => a + b);
	// 		total = result.toFixed(2);
	// 	}

	// 	return total;
	// };

	return (
        <div>
            <Checkout />
        </div>
			// <div className="basket">
			// 	<div className="basket-list">
			// 		<div className="basket-header">
			// 			<h3 className="basket-header-title">
			// 				My Basket &nbsp;
			// 				<span>({` ${basket.length} ${basket.length > 1 ? 'items' : 'item'}`})</span>
			// 			</h3>
			// 		</div>
            //         <div className="clearCart">
            //             <Button onClick={() => onClearBasket()}>
            //                 Clear Cart
            //             </Button>
            //         </div>
            //         Total: {calculateTotal()} 
            //         {basket.length !== 0 && 
                    
            //             <div className="btncontainer">
            //                 <Link 
            //                     to="/checkout/step1"
            //                 >
            //                     Go To Check Out
                                
            //                 </Link>
            //             </div>
                        
            //         }
                        
			// 		{basket.length <= 0 && (
			// 			<div className="basket-empty">
			// 				<h5 className="basket-empty-msg">Your basket is empty</h5>
			// 			</div>
			// 		) || ( basket.map((product, index) => {
            //             const {
            //                 productName,
            //                 productThumbnail,
            //                 productPrice,
            //                 documentID, maxQuantity, quantity
            //             } = product;
            //             return (
            //                 <div className="cartItem" key={index}>
            //                     <div className="cartProductImage">
            //                         <img className="thumb" src={productThumbnail} alt="cart_images" />
            //                     </div>
            //                     <div className="productName">
            //                         {productName}
            //                     </div>
            //                     {/* <div className="productPrice"> 
            //                         £{productPrice} * {quantity}=
            //                     </div> */}
            //                     <div className="productSum">
            //                         £{productPrice * quantity}(x{quantity})
            //                     </div>
            //                     <div className="button">
            //                         <Button onClick={() => onRemoveFromBasket(documentID)}>
            //                             Delete
            //                         </Button>
            //                     </div>
            //                     <div className="cartItemControl">
            //                         <div className="plusItem">
            //                             <Button
            //                                 disabled={quantity === maxQuantity}
            //                                 onClick={() => dispatch(addQtyItem(documentID))}
            //                             >
            //                                 +
            //                             </Button>
            //                         </div>
            //                         <div className="quantity">
            //                             <h3 align="center">{quantity}</h3>
            //                         </div>
            //                         <div className="minusItem">
            //                             <Button
            //                                 disabled={quantity === 1}
            //                                 onClick={() => dispatch(minusQtyItem(documentID))}
            //                             >
            //                                 -
            //                             </Button>
            //                         </div>
            //                     </div>
            //                 </div>
            //             )
            //         }
			// 		))}
					
			// 	</div>
				
			// </div>
	);
};

export default Cart;
