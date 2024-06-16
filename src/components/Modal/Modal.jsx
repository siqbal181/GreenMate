/* eslint-disable react/prop-types */
import './Modal.css';

const Modal = ({ setShowModal }) => {

  return (
    <div>
        <div className="modal-overlay">
          <div className="modal">
            <p>We noticed you're in the supermarket! 📍</p>
            <p>Have you bought you tote 👜 bag?</p>
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
