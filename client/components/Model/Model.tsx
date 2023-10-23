import React from 'react';
import styles from './Modal.module.scss';

interface ModalProps {
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ onClose, children }) => {
  return (
    <div className={styles.modal}>
      <div className={styles.modal__content}>
        <button className={styles.modal__close} onClick={onClose}>
          X
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;