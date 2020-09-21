import React, { useEffect } from 'react'
import './styles.scss'
import { useSelector, useDispatch } from 'react-redux';
import { fetchProductsStart } from '../../redux/Products/products.actions';
import Button from '../../components/forms/Button';
import { addToBasket } from '../../redux/Cart/cart.actions';


const mapState = ({ productsData }) => ({
    products: productsData.products
  });

const MensProducts = () => {
    const { products } = useSelector(mapState);
    const dispatch = useDispatch();
    const onAddToBasket = products => {
		dispatch(addToBasket(products));
    };

    useEffect(() => {
        dispatch(
        fetchProductsStart()
        );
    }, []);

    return (
        <div className="mensProducts">
          <div>
                <h1>
                  Mens Products Here!
                </h1>
                             
                <section className="container">
                    <ul className="catalog">
                        {products.map((product, index) => {
                        const {
                            productName,
                            productThumbnail,
                            productPrice,
                            productCategory
                        } = product;

                        return (
                            <div className="productItem" key={index}>
                                {productCategory === "mens" && (
                                    <div className="manProductsItem">
                                        <div className="productImage">
                                            <img className="thumb" src={productThumbnail} alt="men_image" />
                                        </div>
                                        <div>
                                            {productName}
                                        </div>
                                        <div>
                                            £{productPrice}
                                        </div>
                                        <div>
                                            <Button onClick={() => onAddToBasket(product) }>
                                                Buy
                                            </Button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        )
                        })}
                    </ul>
                </section>
          </div>
        </div>
    )
}

export default MensProducts;