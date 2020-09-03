import React, { FC  } from 'react';
import './styles.scss';


type ModalPropsType = {
  hideModal: boolean,
  toggleModal: () => void,
  children: React.ReactNode,
}

const Modal: FC<ModalPropsType> = ({ hideModal, toggleModal, children }) => {
  if (hideModal) return null;

  return (
    <>
      <div className="modalOverlay" onClick={() => toggleModal()} />
      <div className="modal">
        {children}
      </div>
    </>
  );
}

export default Modal;