import React, { useState } from "react";
import { Form, Field } from 'react-final-form';
import Select from 'react-select';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Input from '../../atoms/input/input'; // Replace this with your actual Input component
import Button from '../../atoms/button/button';
import "./bookingform.scss";

const BookingForm: React.FC = () => {

    const handleSubmit = async (values: FormData) => {
        console.log('booking form submitted', values);
    };

    const serviceTypeOptions = [
        { value: 'blowout', label: 'Blowout' },
        { value: 'manipedi', label: 'Mani/Pedi' },
        { value: 'massage', label: 'Massage' }
    ];

    const locationOptions = [
        { value: 'malibu', label: 'Malibu Spa Retreat' },
        { value: 'dreamhouse', label: 'Dreamhouse Spa Retreat' }
    ];

  const spaSpecialistOptions = {
    blowout: [
        { value: 'barbie', label: 'Barbie' },
        { value: 'ken', label: 'Ken' }
    ],
    manipedi: [
        { value: 'stacie', label: 'Stacie' },
        { value: 'chelsea', label: 'Chelsea' }
    ],
    massage: [
        { value: 'christie', label: 'Christie' },
        { value: 'skipper', label: 'Skipper' }
    ]
  };
  
  return (
    <Form
        onSubmit={handleSubmit}
        initialValues={{
        serviceType: { value: '', label: 'Select Service Type' },
        location: { value: '', label: 'Select Location' },
        spaSpecialist: null,
        date: '',
        time: '',
        notes: ''
        }}
        render={({ handleSubmit, values }) => (
            <form onSubmit={handleSubmit}>
                <Button type="submit">Submit</Button>
            </form>
        )}
    />
  );
}

export default BookingForm;
