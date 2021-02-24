import React, { useEffect } from 'react'
import './styles.scss'
import { useSelector, useDispatch } from 'react-redux';
import { fetchProductsStart } from '../../redux/Products/products.actions';
import Button from '../../components/forms/Button';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import FormSelect from '../../components/forms/FormSelect';
import Product from '../../components/ProductResult/Product';
import LoadMore from '../../components/LoadMore';


const mapState = ({ productsData }) => ({
    products: productsData.products,
  });

const WomenProducts = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { products } = useSelector(mapState);
    const { filterType = "mens" } = useParams();

    const { data, queryDoc, isLastPage } = products;

    useEffect(() => {
        dispatch(
            fetchProductsStart({ filterType })
        )
    }, [filterType]);

    const handleFilter = (e) => {
        const nextFilter = e.target.value;
        history.push(`/search/${nextFilter}`);
    }

    const configFilters = {
        defaultValue: filterType,
        options: [{
          name: 'Show all',
          value: ''
        }, {
          name: 'Mens',
          value: 'mens'
        }, {
          name: 'Womens',
          value: 'womens'
        }],
        handleChange: handleFilter
    };

    const handleLoadMore = () => {
        dispatch(
            fetchProductsStart({ 
                filterType, 
                startAfterDoc: queryDoc,
                persistProducts: data
            })
        )
    }

    const configLoadMore = {
        onLoadMoreEvent: handleLoadMore,
    }

    if (!Array.isArray(data)) return null;

    if (data.length < 1) {
        return (
            <div className="products">
                <FormSelect {...configFilters} />
                <p>
                    No search results.
                </p>
            </div>
        )
    }

    return (
        <div className="products">
          <div>
                <h1>
                  Man Products Here!
                </h1>            
                
                <FormSelect {...configFilters} />
            
                <div className="productResults">
                    {data.map((product, pos) => {
                        const { productThumbnail, productName, productPrice } = product;
                        if (!productThumbnail || !productName || typeof productPrice === 'undefined') return null;
                        
                        const configProduct = {
                            ...product
                        };

                        return (
                            <Product key={pos} {...configProduct} />
                        );
                    })}
                </div>

                {!isLastPage && (
                    <LoadMore {...configLoadMore} />
                )}
                
          </div>
        </div>
    )
}

export default WomenProducts;