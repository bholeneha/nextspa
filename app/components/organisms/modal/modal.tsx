import React, { useRef } from "react";
import BookingForm from '../bookingform/bookingform';
import './modal.scss';

interface ModalProps {
    toggleModal: () => void;
    children?: React.ReactNode;
    meeting: {
        serviceType: BookingFormOption | null;
        location: BookingFormOption | null;
        spaSpecialist: BookingFormOption | null;
        date: Date | null; // Separate date property
        time?: Date | null; // Separate time property
        notes?: string;
    };
}

interface BookingFormOption {
    value: string;
    label: string;
}

const Modal: React.FC<ModalProps> = ({ toggleModal, children, meeting }) => {
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
                        <BookingForm toggleModal={toggleModal} meeting={meeting}/>
                        {children}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Modal;
