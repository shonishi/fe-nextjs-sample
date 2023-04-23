import type { Meta, StoryObj } from '@storybook/react';
import Highlights from '.';

const meta: Meta<typeof Highlights> = {
  component: Highlights,
};

export default meta;
type Story = StoryObj<typeof Highlights>;

export const MultipleElement: Story = {
  args: {
    highlights: [
      'お風呂に浮く',
      '握ると音が鳴る',
      'シリコン製で丈夫',
      'お子様の筋力強化にも',
    ],
  },
};

export const SingleElement: Story = {
  args: {
    highlights: ['お風呂に浮く'],
  },
};

export const EmptyElement: Story = {
  args: {
    highlights: [],
  },
};
