/* eslint-disable react/prop-types */
// import { useState } from 'react';
import './Modal.css';

const Modal = ({showModal, setShowModal}) => {
  // const [isOpen, setIsOpen] = useState(false);
  // []

  // const openModal = () => setIsOpen(true);
  // const closeModal = () => setIsOpen(false);

  return (
    <div>
      {/* <button onClick={openModal}>Open Modal</button> */}
      {/* {showModal && ( */}
        <div className="modal-overlay">
          <div className="modal">
            {/* <button className="close-button" onClick={closeModal}>×</button> */}
            <p>Did you use a tote bag in the supermarket?</p>
            <div className="button-container">``
              <button className="modal-button" onClick={() => setShowModal(false)}>Yes</button>
              <button className="modal-button" onClick={() => setShowModal(false)}>No</button>
            </div>
          </div>
        </div>
      {/* )} */}
    </div>
  );
};

export default Modal;
