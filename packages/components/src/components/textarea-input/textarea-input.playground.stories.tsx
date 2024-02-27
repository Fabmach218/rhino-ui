import { Meta, StoryObj } from '@storybook/react';
import { TextareaInput, TextareaInputProps } from './textarea-input';

const meta: Meta<typeof TextareaInput> = {
  title: 'Components/TextareaInput/Playground',
  component: TextareaInput,
  argTypes: {
    id: {
      control: 'text',
    },
    label: {
      control: 'text',
    },
    rows: {
      control: 'number',
    },
    value: {
      control: 'text',
    },
    autoFocus: {
      control: 'boolean',
    },
    error: {
      control: 'text',
    },
    helpText: {
      control: 'text',
    },
    hideLabel: {
      control: 'boolean',
    },
    isClearable: {
      control: 'boolean',
    },
    isDisabled: {
      control: 'boolean',
    },
    isMulti: {
      control: 'boolean',
    },
    isRequired: {
      control: 'boolean',
    },
    className: {
      control: 'text',
    },
    placeholder: {
      control: 'text',
    },
    resize: {
      control: {
        type: 'radio',
        options: ['vertical', 'horizontal', 'none', 'both'],
      },
    },

    maxLength: {
      control: 'number',
    },
  },
};

export default meta;

type Story = StoryObj<TextareaInputProps>;

export const Playground: Story = {
  args: {
    id: 'playgroundTextareaInput',
    label: 'Playground TextareaInput',
    helpText: 'Helpful text',
    name: 'playgroundTextareaInput',
    rows: 5,
  },
};
