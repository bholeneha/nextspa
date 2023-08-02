import React, { useRef } from "react";
import BookingForm from '../bookingform/bookingform';
import './modal.scss';

interface ModalProps {
    toggleModal: () => void;
    children?: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ toggleModal, children }) => {
    const modalRef = useRef<HTMLDivElement>(null);

    const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
        // Check if the click occurred outside the booking form area (i.e., the modal overlay)
        if (event.target === modalRef.current) {
            toggleModal();
        }
    };

    return (
        <>
            <div className="modal">
                <div className="overlay" ref={modalRef} onClick={handleOverlayClick}>
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
