import type { Meta, StoryObj } from '@storybook/react';
import LoginForm from './loginform';

const meta: Meta<typeof LoginForm> = {
    title: 'Organisms/LoginForm',
    component: LoginForm
  };

  export default meta;
  
  type Story = StoryObj<typeof LoginForm>;
  
  export const Primary: Story = {
    args: {
       onSubmit: () => {}
    }
  };