'use client';

import React, {useState} from 'react';
import { Form, Field } from 'react-final-form';
// import { authenticate } from '../../../utils/auth';
import ErrorMessage from '../../atoms/errormessage/errormessage';
import Button from '../../atoms/button/button';
import './loginform.scss';

type LoginFormProps = {
  onSubmit: (values: LoginValues) => void;
  error: boolean;
}

type LoginValues = {
  email: string;
  password: string;
}

const LoginForm: React.FC<LoginFormProps> = ({ onSubmit, error }) => {

  const handleSubmit = async (values: LoginValues) => {
      // console.log('login form handle submit')
      onSubmit(values);
  };

  return (
    <Form
      onSubmit={handleSubmit}
      initialValues={{ email: '', password: '' }}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <div className='input-field'>
            <label htmlFor="email">Email</label>
            <Field
              name="email"
              component="input"
              type="text"
              placeholder="Enter your email"
            />
          </div>

          <div className='input-field'>
            <label htmlFor="password">Password</label>
            <Field
              name="password"
              component="input"
              type="password"
              placeholder="Enter your password"
            />
          </div>
          {error && <ErrorMessage>Incorrect Email and Password!</ErrorMessage>}
          <a href='/'>Forgot password?</a>
          <Button type="submit">Login</Button>
        </form>
      )}
    />
  );
};

export default LoginForm;
