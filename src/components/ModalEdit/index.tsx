import React, { FC } from 'react';
import './styles.scss';


type ModalPropsType = {
  hideModalEdit: boolean,
  toggleModalEdit: () => void,
  children: React.ReactNode,
}

const ModalEdit: FC<ModalPropsType> = ({ hideModalEdit, toggleModalEdit, children }) => {
  if (hideModalEdit) return null;

  return (
    <>
      <div className="modalOverlay" onClick={() => toggleModalEdit()} />
      <div className="modal">
        {children}
      </div>
    </>
  );
}

export default ModalEdit;