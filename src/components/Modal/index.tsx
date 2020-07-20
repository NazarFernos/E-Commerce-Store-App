import React, { FC, DetailedHTMLProps, FormHTMLAttributes } from 'react';
import './styles.scss';


type ModalPropsType = {
  hideModal: any,
  toggleModal: () => void,
  children: React.ReactNode,
  //onSubmit?: ((event: React.FormEvent<HTMLFormElement>) => void) | undefined
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