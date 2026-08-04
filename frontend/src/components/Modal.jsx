import React from "react";

const Modal = ({ children, isOpen, onClose, title }) => {
  if (!isOpen) return;
  
  return <div>Modal</div>;
};

export default Modal;
