/* eslint-disable react/prop-types */
import { useState } from 'react';
import { Button, Box, Typography, MenuItem, Select, FormControl } from '@mui/material';
import './Modal.css';

const Modal = ({ setShowModal }) => {
  const [modalContent, setModalContent] = useState('initial');
  const [mitigationChoice, setMitigationChoice] = useState('');
  const [showMitigation, setShowMitigation] = useState(false);

  const handleYes = () => {
    setModalContent('greatJob');
  };

  const handleNo = () => {
    setModalContent('mitigationFlow');
  };

  const handleMitigationChange = (event) => {
    setMitigationChoice(event.target.value);
    setShowMitigation(true);
  };

  const handleMitigationSubmit = () => {
    setShowModal(false);
  };

  return (
    <div>
      <div className="modal-overlay">
        <div className="modal">
          {modalContent === 'initial' && (
            <>
              <p>We noticed you&apos;re in the supermarket! 📍</p>
              <p>Do you have your reusable bag 👜?</p>
              <div className="button-container">
                <Button variant="contained" color="primary" onClick={handleYes}>Yes</Button>
                <Button variant="contained" color="secondary" onClick={handleNo}>No</Button>
              </div>
            </>
          )}
          {modalContent === 'greatJob' && (
            <>
              <Typography variant="h6">Great job!</Typography>
              <Button variant="contained" color="primary" onClick={() => setShowModal(false)}>Close</Button>
            </>
          )}
          {modalContent === 'mitigationFlow' && (
            <>
              <Typography variant="h6">What would you like to do?</Typography>
              <FormControl fullWidth>
                <Select
                  labelId="mitigation-select-label"
                  value={mitigationChoice}
                  onChange={handleMitigationChange}
                >
                  <MenuItem value="payNow">Pay to Plant 🌳</MenuItem>
                  <MenuItem value="addChallenge">Add a Challenge ❤️</MenuItem>
                </Select>
              </FormControl>
              {showMitigation && (
                <Box mt={2}>
                  {mitigationChoice === 'payNow' && (
                    <>
                      <Typography variant="body1">Choose amount to pay:</Typography>
                      <Select fullWidth>
                        <MenuItem value={5}>$5</MenuItem>
                        <MenuItem value={10}>$10</MenuItem>
                        <MenuItem value={20}>$20</MenuItem>
                      </Select>
                      <Box mt={2}>
                        <Button variant="contained" color="primary" onClick={handleMitigationSubmit}>Pay Now</Button>
                      </Box>
                    </>
                  )}
                  {mitigationChoice === 'addChallenge' && (
                    <>
                      <Typography variant="body1">Challenge Added to your list!</Typography>
                      <Button variant="contained" color="primary" onClick={() => setShowModal(false)}>Close</Button>
                    </>
                  )}
                </Box>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
