import type { Meta, StoryObj } from '@storybook/react';
import Reviews from '.';

const meta: Meta<typeof Reviews> = {
  component: Reviews,
};

export default meta;
type Story = StoryObj<typeof Reviews>;

export const Normal: Story = {
  args: {
    reviews: { href: '#', average: 4, totalCount: 117 },
  },
};
