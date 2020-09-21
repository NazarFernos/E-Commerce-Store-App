import React, { useEffect } from 'react'
import './styles.scss'
import { useSelector, useDispatch } from 'react-redux';
import { fetchProductsStart } from '../../redux/Products/products.actions';
import Button from '../../components/forms/Button';


const mapState = ({ productsData }) => ({
    products: productsData.products,
  });

const WomenProducts = () => {
    const { products } = useSelector(mapState);
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(
        fetchProductsStart()
        );

    }, []);


    return (
        <div className="womensProducts">
          <div>
                <h1>
                  Woman Products Here!
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
                                {productCategory === "womens" && (
                                    <div className="womanProductsItem">
                                        <div className="productImage">
                                            <img className="thumb" src={productThumbnail} alt="woman_images" />
                                        </div>
                                        <div>
                                            {productName}
                                        </div>
                                        <div>
                                            £{productPrice}
                                        </div>
                                        <div>
                                            <Button onClick={() => null}>
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

export default WomenProducts;