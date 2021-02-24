import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Button from '../../components/forms/Button';
import FormInput from '../../components/forms/FormInput';
import { removeFromBasket, addQtyItem, minusQtyItem } from '../../redux/Cart/cart.actions';
import { Link } from 'react-router-dom';

import './styles.scss';
//import NovaPoshta from 'novaposhta';
//import fetch from 'node-fetch';


const apiKey = "";
const url = 'https://api.novaposhta.ua/v2.0/json/';

const Checkout = (props) => {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [city, setCity] = useState('');
    const [arr, setArr] = useState([]);
    const [deliveryCity, setDeliveryCity] = useState('');
    const [postOffice, setPostOffice] = useState('');

    const basket = useSelector(state => state.basket);
    const orders = useSelector(state => state.orders);
    const dispatch = useDispatch();
    
   
   console.log(postOffice)


    useEffect(() => {
        
        function getNPWarehouses(url,data) {
            let citiesArr = [];
            let xhr = new XMLHttpRequest();
            xhr.open("POST", url, true);
            xhr.setRequestHeader("Content-Type", "application/json");
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    var json = JSON.parse(xhr.responseText);
                    setArr(json.data)       
                }
            };
            xhr.send(data);
            return citiesArr;
        }

        const warehouses = JSON.stringify({'modelName': 'AddressGeneral','calledMethod': 'getWarehouses',"methodProperties": {"CityName": deliveryCity},'apiKey': apiKey});
        if(deliveryCity !== '') {
            getNPWarehouses(url,warehouses);
        }
    }, [deliveryCity]);

// useEffect(() => {
//     const api = new NovaPoshta({ apiKey: "" });
//     api.address.getCities({Ref: "e68be3b9-ca66-11e9-b0c5-005056b24375"}).then((json) => setArr(json.data));
// }, [setArr]);


    console.log(arr)

    const onRemoveFromBasket = (props) => dispatch(removeFromBasket(props));
    
	const calculateTotal = () => {
		let total = 0;

		if (basket.length !== 0) {
			const result = basket.map(product => product.productPrice * product.quantity).reduce((a, b) => a + b);
			total = result.toFixed(2);
		}

		return total;
    };

	return (
			<div className="basket">
				<div className="basket-list">
					<div className="basket-header">
						<h1 className="basket-header-title">
							Order Summary &nbsp;
						</h1>
					</div>
                    <h3>
                        Contact Information
                    </h3>
                    
                    <div className="contactContainer">
                        <div className="block">
                            <FormInput
                                className="input surname"
                                label="Surname"
                                type="text"
                                placeholder="Enter your surname"
                                value={surname}
                                handleChange={(e) => setSurname(e.target.value)}
                            />
                            <FormInput
                                className="input phoneNumber"
                                label="Phone Number"
                                type="tel"
                                placeholder="Enter your phone number"
                                value={phoneNumber}
                                handleChange={(e) => setPhoneNumber(e.target.value)}

                            />
                        </div>
                        <div className="block">
                            <FormInput
                                className="input name"
                                label="Name"
                                type="text"
                                placeholder="Enter your name"
                                value={name}
                                handleChange={(e) => setName(e.target.value)}
                            />
                            <FormInput
                                className="input city"
                                label="City"
                                type="text"
                                placeholder="Enter your city"
                                value={city}
                                handleChange={(e) => setCity(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="itemsContainer">
                        <h3>
                            Order Items
                        </h3>
                        <h4>
                            Total: {calculateTotal()}
                        </h4>

                        {basket.length <= 0 && (
                            <div className="basket-empty">
                                <h5 className="basket-empty-msg">Your basket is empty</h5>
                            </div>
                        ) || ( basket.map((product, index) => {
                            const {
                                productName,
                                productThumbnail,
                                productPrice,
                                documentID, maxQuantity, quantity
                            } = product;
                            return (
                                <div className="cartItem" key={index}>
                                    <div className="cartProductImage">
                                        <img className="thumb" src={productThumbnail} alt="cart_image" />
                                    </div>
                                    <div className="productName">
                                        {productName}
                                    </div>
                                    <div className="productSum">
                                        £{productPrice * quantity}(x{quantity})
                                    </div>
                                    <div className="button">
                                        <Button onClick={() => onRemoveFromBasket(documentID)}>
                                            Delete
                                        </Button>
                                    </div>
                                    <div className="cartItemControl">
                                        <div className="plusItem">
                                            <Button
                                                disabled={quantity === maxQuantity}
                                                onClick={() => dispatch(addQtyItem(documentID))}
                                            >
                                                +
                                            </Button>
                                        </div>
                                        <div className="quantity">
                                            <h3 align="center">{quantity}</h3>
                                        </div>
                                        <div className="minusItem">
                                            <Button
                                                disabled={quantity === 1}
                                                onClick={() => dispatch(minusQtyItem(documentID))}
                                            >
                                                -
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                        ))}
                    </div>					
				</div>
                <div>
                    <h3>
                        Delivery Details
                    </h3>
                    <FormInput
                        className="input deliveryCity"
                        label="Delivery City"
                        type="text"
                        placeholder="Enter your delivery city"
                        value={deliveryCity}
                        handleChange={(e) => setDeliveryCity(e.target.value)}
                    />
                    <select 
                        className="selectPostOffice"
                        value={postOffice}
                        onChange={(e) => setPostOffice(e.target.value)}
                    >
                        <option>Choose your post office</option>
                        {arr.map((item, index) => 
                            <option key={index}>{item.Description}</option>
                        )}
                    </select>
                    
                </div>
                <div>
                    <Link to="/checkout/step2">
                        Next Step
                    </Link>
                </div>
				
			</div>
	);
};

export default Checkout;
