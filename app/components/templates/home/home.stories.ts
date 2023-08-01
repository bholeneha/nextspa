import type { Meta, StoryObj } from '@storybook/react';
import Home from './home';

const meta: Meta<typeof Home> = {
    title: 'Templates/Home',
    component: Home
  };

  export default meta;
  
  type Story = StoryObj<typeof Home>;
  
  export const Primary: Story = {
    args: {}
  };
