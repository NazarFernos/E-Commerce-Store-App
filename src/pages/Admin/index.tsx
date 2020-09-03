import React, { useState, useEffect, FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addProductStart, fetchProductsStart, deleteProductStart, editProductStart } from '../../redux/Products/products.actions';
import Modal from '../../components/Modal';
import FormInput from '../../components/forms/FormInput';
import FormSelect from '../../components/forms/FormSelect';
import Button from '../../components/forms/Button';
import './styles.scss';
import { ProductDataType } from '../../types';
import ModalEdit from '../../components/ModalEdit';


const mapState = ({ productsData }: ProductDataType) => ({
  products: productsData.products,
});

const Admin: FC = () => {
  const { products } = useSelector(mapState);
  const dispatch = useDispatch();
  const [hideModal, setHideModal] = useState<boolean>(true);
  const [hideModalEdit, setHideModalEdit] = useState<boolean>(true);
  const [productCategory, setProductCategory] = useState<string>('mens');
  const [productName, setProductName] = useState<string>('');
  const [productThumbnail, setProductThumbnail] = useState<string>('');
  const [productPrice, setProductPrice] = useState<number>(0);
  const [maxQuantity, setMaxQuantity] = useState<number>(0);
  const [quantity, setQuantity] = useState<number>(1)


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
      fetchProductsStart()
    );
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
                    {products.map((product, index) => {
                      const {
                        productName,
                        productThumbnail,
                        productPrice,
                        documentID
                      } = product;

                      return (
                        <tr key={index}>
                          <td>
                            <img className="thumb" src={productThumbnail} />
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
                    
                      {products.map((product, index) => {
                            const {
                              productName,
                              productThumbnail,
                              productPrice,
                              documentID,
                              productCategory
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
                              //value={productCategory}
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
          </tbody>
        </table>

      </div>

    </div>
  );
}

export default Admin;