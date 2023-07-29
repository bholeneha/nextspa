import type { Meta, StoryObj } from '@storybook/react';
import NavBar from './navbar';

const meta: Meta<typeof NavBar> = {
    title: 'Molecules/NavBar',
    component: NavBar
  };

  export default meta;
  
  type Story = StoryObj<typeof NavBar>;
  
  export const Primary: Story = {
    args: {
    },
  };