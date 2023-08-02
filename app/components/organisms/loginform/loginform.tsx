import React from 'react';
import { Form, Field } from 'react-final-form';
import LabeledInput from '../../molecules/labeledinput/labeledinput';
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
            <Field name="email">
              {props => (
                <LabeledInput name='email' {...props} label="Email" />
              )}
            </Field>
          </div>

          <div className='input-field'>
            <Field name="password">
              {props => (
                <LabeledInput name='password' {...props} label="Password" />
              )}
            </Field>
          </div>
          {error && <ErrorMessage>Incorrect Email and Password!</ErrorMessage>}
          <a href='/'>Forgot password?</a>
          <Button type="submit">LOGIN</Button>
        </form>
      )}
    />
  );
};

export default LoginForm;
