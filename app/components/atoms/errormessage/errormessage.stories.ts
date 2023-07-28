import type { Meta, StoryObj } from '@storybook/react';

import ErrorMessage from './errormessage';

const meta: Meta<typeof ErrorMessage> = {
    title: 'Error Message',
    component: ErrorMessage
  };

  export default meta;
  
  type Story = StoryObj<typeof ErrorMessage>;
  
  export const Primary: Story = {
    args: {
        children: 'Error Message',
    }
  };
