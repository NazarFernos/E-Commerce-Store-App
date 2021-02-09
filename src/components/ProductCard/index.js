import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { addProduct } from '../../redux/Cart/cart.actions';
import { fetchProductStart, setProduct } from '../../redux/Products/products.actions';
import Button from '../forms/Button';
import './styles.scss';


const mapState = state => ({
    product: state.productsData.product
});

const ProductCard = ({}) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { productID } = useParams();
    const { product } = useSelector(mapState);

    const { 
        productName,
        productThumbnail,
        productPrice,
        productDesc 
    } = product;

    useEffect(() => {
        dispatch(
            fetchProductStart(productID)
        )

        return () => {
            dispatch(
                setProduct({})
            )
        }
    }, []);

    const configAddToCartBtn = {
        type: 'button'
    }

    const handleAddToCart = (product) => {
        if (!product) return;
        dispatch(
            addProduct(product)
        );
        history.push('/cart')

    };

    return (
        <div className="productCard">
            <div className="hero">
                <img src={productThumbnail} />
            </div>
            <div className="productDetails">
                <ul>
                    <li>
                        <h1>
                            {productName}
                        </h1>
                    </li>
                    <li>
                        <span>
                            £{productPrice}  
                        </span>
                    </li>
                    <li>
                        <div className="addToCart">
                            <Button {...configAddToCartBtn} onClick={() => handleAddToCart(product)}>
                                Add to cart
                            </Button>
                        </div>
                    </li>
                    <li>
                        <span
                        className="desc"
                        dangerouslySetInnerHTML={{__html: productDesc}}/>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default ProductCard;