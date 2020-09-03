import React, { FC  } from 'react';
import './styles.scss';


type ModalPropsType = {
  hideModalCart: boolean,
  toggleModalCart: () => void,
  children: React.ReactNode,
}

const ModalCart: FC<ModalPropsType> = ({ hideModalCart, toggleModalCart, children }) => {
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