import type { Meta, StoryObj } from '@storybook/react';
import LoginPage from './loginpage';

const meta: Meta<typeof LoginPage> = {
    title: 'Pages/Login Page',
    component: LoginPage
  };

  export default meta;
  
  type Story = StoryObj<typeof LoginPage>;
  
  export const Primary: Story = {
    args: {}
  };
