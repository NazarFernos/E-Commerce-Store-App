import React from 'react';
import './styles.scss';


const ModalCart = ({ hideModalCart, toggleModalCart, children }) => {
  if (hideModalCart) return null;

  return (
    <>
      <div className="modalOverlay" onClick={() => toggleModalCart()} />
      <div className="modal">
        {children}
      </div>
    </>
  );
}

export default ModalCart;