import type { Meta, StoryObj } from '@storybook/react';

import NavItem from './navitem';

const meta: Meta<typeof NavItem> = {
    title: 'Atoms/NavItem',
    component: NavItem
  };

  export default meta;
  
  type Story = StoryObj<typeof NavItem>;
  
  export const Primary: Story = {
    args: {
       href: 'Nav Item', 
       label: 'Nav Item', 
       isActive: false
    }
  };

  export const Active: Story = {
    args: {
       href: 'Nav Item', 
       label: 'Nav Item', 
       isActive: true
    }
  };