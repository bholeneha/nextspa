import type { Meta, StoryObj } from '@storybook/react';
import Dashboard from './dashboard';

const meta: Meta<typeof Dashboard> = {
    title: 'Templates/Dashboard',
    component: Dashboard
  };

  export default meta;
  
  type Story = StoryObj<typeof Dashboard>;
  
  export const Primary: Story = {
    args: {}
  };
