import React from "react";
import BookingForm from '../bookingform/bookingform';
import './modal.scss';

interface ModalProps {
    toggleModal: () => void;
    children?: React.ReactNode;
  }

const Modal: React.FC<ModalProps>= ({toggleModal, children}) => {
   
    return (
        <>
            <div className="modal">
                <div className="overlay" onClick={toggleModal}>
                    <div className="modal-content">
                        <h2>BOOK MEETING</h2>
                        <BookingForm />
                        {children}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Modal;