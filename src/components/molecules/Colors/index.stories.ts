import type { Meta, StoryObj } from '@storybook/react';
import Colors from '.';

const meta: Meta<typeof Colors> = {
  component: Colors,
};

export default meta;
type Story = StoryObj<typeof Colors>;

export const MultipleElements: Story = {
  args: {
    colors: [
      {
        id: 1,
        name: 'Pale yellow',
        class: 'bg-yellow-50',
        selectedClass: 'ring-gray-400',
      },
      {
        id: 2,
        name: 'Yellow',
        class: 'bg-yellow-100',
        selectedClass: 'ring-gray-400',
      },
      {
        id: 3,
        name: 'Dark yellow',
        class: 'bg-yellow-300',
        selectedClass: 'ring-gray-900',
      },
    ],
    selectedColorId: 1,
    changeColor: undefined,
  },
};

export const SingleElements: Story = {
  args: {
    colors: [
      {
        id: 1,
        name: 'Pale yellow',
        class: 'bg-yellow-50',
        selectedClass: 'ring-gray-400',
      },
    ],
    selectedColorId: 1,
    changeColor: undefined,
  },
};

export const EmptyElements: Story = {
  args: {
    colors: [],
    selectedColorId: 0,
    changeColor: undefined,
  },
};
