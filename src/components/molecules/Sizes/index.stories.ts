import type { Meta, StoryObj } from '@storybook/react';
import Sizes from '.';

const meta: Meta<typeof Sizes> = {
  component: Sizes,
};

export default meta;
type Story = StoryObj<typeof Sizes>;

export const MultipleElements: Story = {
  args: {
    sizes: [
      { id: 1, name: 'XXS', inStock: false },
      { id: 2, name: 'XS', inStock: true },
      { id: 3, name: 'S', inStock: true },
      { id: 4, name: 'M', inStock: true },
      { id: 5, name: 'L', inStock: true },
      { id: 6, name: 'XL', inStock: true },
      { id: 7, name: '2XL', inStock: true },
      { id: 8, name: '3XL', inStock: true },
    ],
    selectedSizeId: 3,
    changeSize: undefined,
  },
};

export const SingleElements: Story = {
  args: {
    sizes: [{ id: 2, name: 'XS', inStock: true }],
    selectedSizeId: 2,
    changeSize: undefined,
  },
};

export const EmptyElements: Story = {
  args: {
    sizes: [],
    selectedSizeId: 0,
    changeSize: undefined,
  },
};
