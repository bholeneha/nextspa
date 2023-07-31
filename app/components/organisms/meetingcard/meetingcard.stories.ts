import type { Meta, StoryObj } from '@storybook/react';

import MeetingCard from './meetingcard';

const meta: Meta<typeof MeetingCard> = {
    title: 'Atoms/Meeting Card',
    component: MeetingCard
  };

  export default meta;
  
  type Story = StoryObj<typeof MeetingCard>;
  
  export const Primary: Story = {
    args: {
    }
  };
