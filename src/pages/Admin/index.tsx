import React, { useState, FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addProductStart, deleteProductStart, editProductStart, fetchProductsStart } from '../../redux/Products/products.actions';
import Modal from '../../components/Modal';
import FormInput from '../../components/forms/FormInput';
import FormSelect from '../../components/forms/FormSelect';
import Button from '../../components/forms/Button';
import './styles.scss';
import { ProductDataType } from '../../types';
import ModalEdit from '../../components/ModalEdit';
import { Link, useParams } from 'react-router-dom';
import LoadMore from '../../components/LoadMore';


const mapState = ({ productsData }: ProductDataType) => ({
  products: productsData.products,
});

const Admin: FC = () => {
  const { products } = useSelector(mapState);
  const dispatch = useDispatch();
  //const { filterType } = useParams();
  const [hideModal, setHideModal] = useState<boolean>(true);
  const [hideModalEdit, setHideModalEdit] = useState<boolean>(true);
  const [productCategory, setProductCategory] = useState<string>('mens');
  const [productName, setProductName] = useState<string>('');
  const [productThumbnail, setProductThumbnail] = useState<string>('');
  const [productPrice, setProductPrice] = useState<number>(0);
  const [maxQuantity, setMaxQuantity] = useState<number>(0);
  const [quantity, setQuantity] = useState<number>(1)

  //@ts-ignore
  const { data, queryDoc, isLastPage } = products;

  useEffect(() => {
    dispatch(
      fetchProductsStart()
    );
  }, []);

  const toggleModal = () => setHideModal(!hideModal);
  const toggleModalEdit = () => setHideModalEdit(!hideModalEdit);

  const configModal = {
    hideModal,
    toggleModal
  };

  const configModalEdit = {
    hideModalEdit,
    toggleModalEdit
  };

  const resetForm = () => {
    setHideModal(true);
    setProductCategory('mens');
    setProductName('');
    setProductThumbnail('');
    setProductPrice(0);
    setMaxQuantity(1);
    setQuantity(1);
  };

  const editForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
   
    dispatch(
      editProductStart({
        productCategory,
        productName,
        productThumbnail,
        productPrice,
        maxQuantity
      })
    )
  }


  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch(
      addProductStart({
        productCategory,
        productName,
        productThumbnail,
        productPrice,
        maxQuantity,
      })
    );
    resetForm();
  };

  const handleLoadMore = () => {
    dispatch(
      fetchProductsStart({
        startAfterDoc: queryDoc,
        persistProducts: data
      })
    );
  };

  const configLoadMore = {
    onLoadMoreEvent: handleLoadMore,
  };


  return (
    <div className="admin">

      <div className="callToActions">
        <ul>
          <li>
            <Button onClick={() => toggleModal()}>
              Add new product
            </Button>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="/orders">
              <Button>
                Orders
              </Button>
            </Link>
          </li>
        </ul>
      </div>

      <Modal {...configModal}>
        <div className="addNewProductForm">
          <form onSubmit={handleSubmit}>

            <h2>
              Add new product
            </h2>

            <FormSelect
              label="Category"
              options={[{
                value: "mens",
                name: "Mens"
              }, {
                value: "womens",
                name: "Womens"
              }]}
              handleChange={(e) => setProductCategory(e.target.value)}
            />

            <FormInput
              label="Name"
              type="text"
              value={productName}
              handleChange={(e) => setProductName(e.target.value)}
            />

            <FormInput
              label="Main image URL"
              type="url"
              value={productThumbnail}
              handleChange={(e) => setProductThumbnail(e.target.value)}
            />

            <FormInput
              label="Price"
              type="number"
              min="0.00"
              max="10000.00"
              step="0.01"
              value={productPrice}
              handleChange={(e) => setProductPrice(Number(e.target.value))}
            />
            <FormInput
              label="Max Quantity"
              type="number"
              min="0.00"
              max="10000.00"
              step="1.00"
              value={maxQuantity}
              handleChange={(e) => setMaxQuantity(Number(e.target.value))}
            />
            <FormInput
              label="Quantity"
              type="number"
              min="1"
              value={quantity}
              handleChange={(e) => setQuantity(Number(e.target.value))}
            />

            <Button type="submit">
              Add product
            </Button>

          </form>
        </div>
      </Modal>

      <div className="manageProducts">

        <table cellPadding="0" cellSpacing="0">
          <tbody>
            <tr>
              <th>
                <h1>
                  Manage Products
                </h1>
              </th>
            </tr>
            <tr>
              <td>
                <table className="results" cellPadding="10" cellSpacing="0">
                  <tbody>
                    {(Array.isArray(data) && data.length > 0) && data.map((product, index) => {
                      const {
                        productName,
                        productThumbnail,
                        productPrice,
                        documentID
                      } = product;

                      return (
                        <tr key={index}>
                          <td>
                            <img className="thumb" src={productThumbnail} alt="images_admin" />
                          </td>
                          <td>
                            {productName}
                          </td>
                          <td>
                            £{productPrice}
                          </td>
                          <td>
                            <Button onClick={() => dispatch(deleteProductStart(documentID))}>
                              Delete
                            </Button>
                          </td>
                          <td>
                            <Button onClick={toggleModalEdit}>
                                Edit
                            </Button>
                          </td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
                    
                      {(Array.isArray(data) && data.length > 0) && data.map((product, index) => {
                            const {
                              productName,
                              productThumbnail,
                              productPrice                     
                            } = product; 
                        return (
                      <ModalEdit {...configModalEdit} key={index}>
                        <div className="addNewProductForm">
                          <form onSubmit={editForm}>

                            <h2>
                              Edit product
                            </h2>

                            <FormSelect
                              label="Category"
                              options={[{
                                value: "mens",
                                name: "Mens"
                              }, {
                                value: "womens",
                                name: "Womens"
                              }]}
                              handleChange={(e) => setProductCategory(e.target.value)}
                            />

                            <FormInput
                              label="Name"
                              type="text"
                              value={productName}
                              handleChange={(e) => setProductName(e.target.value)}
                            />

                            <FormInput
                              label="Main image URL"
                              type="url"
                              value={productThumbnail}
                              handleChange={(e) => setProductThumbnail(e.target.value)}
                            />

                            <FormInput
                              label="Price"
                              type="number"
                              min="0.00"
                              max="10000.00"
                              step="0.01"
                              value={productPrice}
                              handleChange={(e) => setProductPrice(Number(e.target.value))}
                            />
                            <FormInput
                              label="Max Quantity"
                              type="number"
                              min="0.00"
                              max="10000.00"
                              step="1.00"
                              value={maxQuantity}
                              handleChange={(e) => setMaxQuantity(Number(e.target.value))}
                            />
                            <FormInput
                              label="Quantity"
                              type="number"
                              min="1"
                              value={quantity}
                              handleChange={(e) => setQuantity(Number(e.target.value))}
                            />

                            <Button type="submit">
                              Edit product
                            </Button>

                          </form>
                        </div>
                      </ModalEdit>)})}
                    
              </td>
            </tr>
            <tr>
              <td>

              </td>
            </tr>
            <tr>
              <td>
                <table cellPadding="10" cellSpacing="0">
                  <tbody>
                    <tr>
                      <td>
                        {!isLastPage && (
                          <LoadMore {...configLoadMore} />
                        )}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>

      </div>

    </div>
  );
}

export default Admin;