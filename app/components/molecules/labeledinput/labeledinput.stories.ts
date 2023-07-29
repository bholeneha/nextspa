import type { Meta, StoryObj } from '@storybook/react';
import LabeledInput from './labeledinput';

const meta: Meta<typeof LabeledInput> = {
    title: 'Molecules/LabeledInput',
    component: LabeledInput
  };

  export default meta;
  
  type Story = StoryObj<typeof LabeledInput>;
  
  export const Primary: Story = {
    args: {
       label: 'Label', 
       type: 'Input', 
       placeholder: 'Input',
       value: 'Input', 
       onChange: () => {}
    }
  };