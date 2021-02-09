import React from 'react';
import './styles.scss';


const ModalEdit = ({ hideModalEdit, toggleModalEdit, children }) => {
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