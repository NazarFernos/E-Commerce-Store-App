import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addProductStart, deleteProductStart, editProductStart, fetchProductsStart } from '../../redux/Products/products.actions';
import Modal from '../../components/Modal';
import FormInput from '../../components/forms/FormInput';
import FormSelect from '../../components/forms/FormSelect';
import Button from '../../components/forms/Button';
import './styles.scss';
import ModalEdit from '../../components/ModalEdit';
import { Link } from 'react-router-dom';
import LoadMore from '../../components/LoadMore';
import CKEditor from 'ckeditor4-react';


const mapState = ({ productsData }) => ({
  products: productsData.products,
});

const Admin = () => {
  const { products } = useSelector(mapState);
  const dispatch = useDispatch();
  //const { filterType } = useParams();
  const [hideModal, setHideModal] = useState(true);
  const [hideModalEdit, setHideModalEdit] = useState(true);
  const [productCategory, setProductCategory] = useState('mens');
  const [productName, setProductName] = useState('');
  const [productThumbnail, setProductThumbnail] = useState('');
  const [productPrice, setProductPrice] = useState(0);
  const [productDesc, setProductDesc] = useState('');
  const [maxQuantity, setMaxQuantity] = useState(0);
  const [quantity, setQuantity] = useState(1)

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
    setProductDesc('');
    setMaxQuantity(1);
    setQuantity(1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      addProductStart({
        productCategory,
        productName,
        productThumbnail,
        productPrice,
        productDesc,
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
            <Link to="/dashboard">
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
              handleChange={(e) => setProductPrice(e.target.value)}
            />

            <CKEditor
              onChange={event => setProductDesc(event.editor.getData())}
            />

            <br />

            <FormInput
              label="Max Quantity"
              type="number"
              min="0.00"
              max="10000.00"
              step="1.00"
              value={maxQuantity}
              handleChange={(e) => setMaxQuantity(e.target.value)}
            />
            <FormInput
              label="Quantity"
              type="number"
              min="1"
              value={quantity}
              handleChange={(e) => setQuantity(e.target.value)}
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
                        </tr>
                      )
                    })}
                  </tbody>
                </table>     
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