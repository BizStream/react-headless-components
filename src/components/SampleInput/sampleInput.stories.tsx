import { Meta, Story } from '@storybook/react';
import { ISampleInputProps, SampleInput } from './sampleInput';

export default {
  title: 'Components/SampleInput',
  component: SampleInput,
} as Meta<typeof SampleInput>;

const Template: Story<ISampleInputProps> = (args) => <SampleInput {...args} />;

export const TextInput = Template.bind({});
TextInput.args = {
  label: 'Input',
  type: 'text',
};

export const NumberInput = Template.bind({});
NumberInput.args = {
  label: 'Input',
  type: 'number',
};
