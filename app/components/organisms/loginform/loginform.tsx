'use client';

import React, {useState} from 'react';
import { Form, Field } from 'react-final-form';
import { authenticate } from '../../../utils/auth';
import ErrorMessage from '../../atoms/errormessage/errormessage';

type LoginFormProps = {
  onSubmit: (values: LoginValues) => void;
}

type LoginValues = {
  email: string;
  password: string;
}

const LoginForm: React.FC<LoginFormProps> = ({ onSubmit }) => {
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (values: LoginValues) => {
    try {
      await authenticate(values.email, values.password);
      setError(null); // Clear any previous error
      onSubmit(values);
    } catch (error) {
      setError('Invalid username or password');
    }
  };

  return (
    <Form
      onSubmit={handleSubmit}
      initialValues={{ email: '', password: '' }}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">Username</label>
            <Field
              name="email"
              component="input"
              type="text"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <Field
              name="password"
              component="input"
              type="password"
              placeholder="Enter your password"
            />
          </div>
          {error && <ErrorMessage>{error}</ErrorMessage>}
          <button type="submit">Login</button>
        </form>
      )}
    />
  );
};

export default LoginForm;
