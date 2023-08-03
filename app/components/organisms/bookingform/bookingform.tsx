import React, { useState } from 'react';
import { Form, Field } from 'react-final-form';
import Select from 'react-select';
import DatePicker from "react-datepicker";
import { startOfDay } from 'date-fns';
import "react-datepicker/dist/react-datepicker.css";
import Input from '../../atoms/input/input';
import Button from '../../atoms/button/button';
import "./bookingform.scss";

interface BookingFormProps {
    toggleModal: () => void;
}

type SingleValue<T> = BookingFormOption | null;
type DateValue = Date | null;

interface BookingFormOption {
    value: string;
    label: string;
}

interface SpaSpecialistOption {
    value: string;
    label: string;
    service: string;
}

interface FormValues {
    serviceType: BookingFormOption | null;
    location: BookingFormOption | null;
    spaSpecialist: BookingFormOption | null;
    date: Date | null;
    time: Date | null;
    notes?: string;
}

const required = (value: string | BookingFormOption | Date | null | undefined) => {
    if (!value || (typeof value === 'object' && 'label' in value && value.label.trim() === '')) {
      return 'This field is required';
    }
    return undefined;
};

const BookingForm: React.FC<BookingFormProps> = ({ toggleModal }) => {
    const [filteredSpaSpecialists, setFilteredSpaSpecialists] = useState<BookingFormOption[]>([]);

    const handleServiceTypeChange = (selectedServiceType: SingleValue<string | BookingFormOption>) => {
        if (selectedServiceType !== null && typeof selectedServiceType !== 'string') {
            const serviceType = selectedServiceType;
            const filteredOptions = spaSpecialistOptions.filter(
                (option) => option.service === serviceType.label
            );
            setFilteredSpaSpecialists(filteredOptions);
        }
    };    

    const handleSubmit = async (values: FormValues) => {
        console.log('booking form submitted', values);
    };

    const serviceTypeOptions: BookingFormOption[] = [
        { value: 'blowout', label: 'Blowout' },
        { value: 'manipedi', label: 'Mani/Pedi' },
        { value: 'massage', label: 'Massage' }
    ];

    const locationOptions: BookingFormOption[] = [
        { value: 'malibu', label: 'Malibu Spa Retreat' },
        { value: 'dreamhouse', label: 'Dreamhouse Spa Retreat' }
    ];

    const spaSpecialistOptions: SpaSpecialistOption[]  = [
        { value: 'barbie', label: 'Barbie', service: 'Blowout' },
        { value: 'ken', label: 'Ken', service: 'Blowout' },
        { value: 'stacie', label: 'Stacie', service: 'Mani/Pedi' },
        { value: 'chelsea', label: 'Chelsea', service: 'Mani/Pedi' },
        { value: 'christie', label: 'Christie', service: 'Massage' },
        { value: 'skipper', label: 'Skipper', service: 'Massage' }
    ];

    return (
        <Form
            onSubmit={handleSubmit}
            initialValues={{
                serviceType: null,
                location: null,
                spaSpecialist: null,
                date: null,
                time: startOfDay(new Date()),
                notes: ''
            }}
            render={({ handleSubmit }) => (
                <form onSubmit={handleSubmit} className="booking-form">
                    {/* SERVICE TYPE FIELD */}
                    <div className='booking-form-field'>
                        <Field name="serviceType" validate={required}>
                            {props => (
                                <>
                                    <Select
                                        className="select"
                                        placeholder="Select Service Type"
                                        options={serviceTypeOptions}
                                        value={props.input.value}
                                        onChange={(selectedOption) => {
                                            props.input.onChange(selectedOption);
                                            handleServiceTypeChange(selectedOption);
                                        }}
                                    />
                                    {props.meta.error && props.meta.touched && <span>{props.meta.error}</span>}
                                </>
                            )}
                        </Field>
                    </div>

                    {/* LOCATION FIELD */}
                    <div className='booking-form-field'>
                        <Field name="location" validate={required}>
                            {props => (
                                <>
                                    <Select
                                        className="select"
                                        placeholder="Select Location"
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
                    <div className='booking-form-field'>
                        <Field name="spaSpecialist" validate={required}>
                            {props => (
                                <>
                                    <Select
                                        className="select"
                                        placeholder="Select Spa Specialist"
                                        options={filteredSpaSpecialists}
                                        value={props.input.value}
                                        onChange={props.input.onChange}
                                    />
                                    {props.meta.error && props.meta.touched && <span>{props.meta.error}</span>}
                                </>
                            )}
                        </Field>
                    </div>

                    {/* DATE FIELD */}
                    <div className='booking-form-field'>
                        <Field name="date" validate={required}>
                            {props => (
                                <>
                                    <DatePicker
                                        selected={props.input.value as DateValue}
                                        onChange={props.input.onChange}
                                        minDate={new Date()}
                                        maxDate={new Date(new Date().setDate(new Date().getDate() + 90))}
                                        dateFormat="MMMM d, yyyy"
                                        placeholderText="Select date"
                                    />
                                    {props.meta.error && props.meta.touched && <span>{props.meta.error}</span>}
                                </>
                            )}
                        </Field>
                    </div>

                    {/* TIME FIELD */}
                    <div className='booking-form-field'>
                        <Field name="time" validate={required}>
                            {props => (
                                <>
                                    <DatePicker
                                        showTimeSelect
                                        showTimeSelectOnly
                                        timeIntervals={60}
                                        timeFormat="hh:mm aa"
                                        selected={props.input.value as DateValue}
                                        onChange={props.input.onChange}
                                        placeholderText="Select time"
                                    />
                                    {props.meta.error && props.meta.touched && <span>{props.meta.error}</span>}
                                </>
                            )}
                        </Field>
                    </div>

                    {/* NOTES FIELD */}
                    <div className='booking-form-field'>
                        <Field name="notes">
                            {props => (
                                <>
                                    <Input
                                        className="booking-form-notes"
                                        name="notes"
                                        type="text"
                                        placeholder="Notes"
                                        value={props.input.value}
                                        onChange={props.input.onChange}
                                        meta={props.meta}
                                        input={props.input}
                                    />
                                </>
                            )}
                        </Field>
                    </div>

                    <Button type="submit" onClick={toggleModal}>SUBMIT</Button>
                </form>
            )}
        />
    );
}

export default BookingForm;
