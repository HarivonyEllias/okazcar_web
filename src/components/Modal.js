import React from 'react';
import "../assets/css/modal.css";

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>Login</h2>
        <p>Log in with your email and six-digit code.</p>
        <form>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" required />

          <label htmlFor="code">Six-digit Code:</label>
          <input type="text" id="code" maxLength="6" required />

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
