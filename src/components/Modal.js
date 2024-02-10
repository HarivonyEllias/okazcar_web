import React from 'react';
import "../assets/css/modal.css";

const Modal = ({ isOpen, onClose }) => {
  const handleCloseModal = (e) => {
    // Check if the click is outside the modal content
    if (e.target.classList.contains('modal-overlay')) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={handleCloseModal}>
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h1 style={{fontFamily:"cursive",color:"purple",fontSize:"24pt"}}>Se connecter</h1>
        <hr />
        <p>Connectez-vous via votre téléphone pour avoir votre code</p>
        <form>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" required />

          <label htmlFor="code">Code a 10 chiffres:</label>
          <input type="number" id="code" maxLength="10" required />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
