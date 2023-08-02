import React, { useState } from "react";
import { Form, Field } from 'react-final-form';
import Select from 'react-select';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Input from '../../atoms/input/input'; // Replace this with your actual Input component
import Button from '../../atoms/button/button';
import "./bookingform.scss";

type ServiceType = 'blowout' | 'manipedi' | 'massage';

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

    const spaSpecialistOptions = [
        {
            label: 'Blowout',
            options: [
                { value: 'barbie', label: 'Barbie' },
                { value: 'ken', label: 'Ken' }
            ]
        },
        {
            label: 'Mani/Pedi',
            options: [
                { value: 'stacie', label: 'Stacie' },
                { value: 'chelsea', label: 'Chelsea' }
            ]
        },
        {
            label: 'Massage',
            options: [
                { value: 'christie', label: 'Christie' },
                { value: 'skipper', label: 'Skipper' }
            ]
        }
    ];
  
  return (
    <Form
        onSubmit={handleSubmit}
        initialValues={{
        serviceType: { value: '', label: 'Select Service Type' },
        location: { value: '', label: 'Select Location' },
        spaSpecialist: { value: '', label: 'Select Your Specialist'},
        date: '',
        time: '',
        notes: ''
        }}
        render={({ handleSubmit, values }) => (
            <form onSubmit={handleSubmit} className="booking-form">

                {/* SERVICE TYPE FIELD */}
                <div className='input-field'>
                    <Field name="serviceType">
                    {props => (
                        <>
                        <Select
                            className="select"
                            options={serviceTypeOptions}
                            value={props.input.value}
                            onChange={props.input.onChange}
                        />
                        {props.meta.error && props.meta.touched && <span>{props.meta.error}</span>}
                        </>
                    )}
                    </Field>
                </div>

                {/* LOCATION FIELD */}
                <div className='input-field'>
                    <Field name="location">
                    {props => (
                        <>
                        <Select
                            className="select"
                            options={locationOptions}
                            value={props.input.value}
                            onChange={props.input.onChange}
                        />
                        {props.meta.error && props.meta.touched && <span>{props.meta.error}</span>}
                        </>
                    )}
                    </Field>
                </div>

                {/* SPA SPECIALIST FIELD */}
                <div className='input-field'>
                    <Field name="spaSpecialist">
                    {props => (
                        <>
                        <Select
                            className="select"
                            options={spaSpecialistOptions}
                            value={props.input.value}
                            onChange={props.input.onChange}
                        />
                        {props.meta.error && props.meta.touched && <span>{props.meta.error}</span>}
                        </>
                    )}
                    </Field>
                </div>

                {/* DATE FIELD */}

                {/* TIME FIELD */}

                {/* NOTES FIELD */}




                <Button type="submit">SUBMIT</Button>
            </form>
        )}
    />
  );
}

export default BookingForm;
