/* eslint-disable react/prop-types */
import './Modal.css';

const Modal = ({ setShowModal }) => {

  return (
    <div>
        <div className="modal-overlay">
          <div className="modal">
            <p>Did you use a tote bag in the supermarket?</p>
            <div className="button-container">
              <button className="modal-button" onClick={() => setShowModal(false)}>Yes</button>
              <button className="modal-button" onClick={() => setShowModal(false)}>No</button>
            </div>
          </div>
        </div>
    </div>
  );
};

export default Modal;
