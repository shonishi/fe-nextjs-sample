import type { Meta, StoryObj } from '@storybook/react';
import Description from '.';

const meta: Meta<typeof Description> = {
  component: Description,
};

export default meta;
type Story = StoryObj<typeof Description>;

export const Normal: Story = {
  args: {
    description: 'あひるのフィギュアです。お風呂に浮かべて楽しいひと時。',
  },
};

export const Empty: Story = {
  args: {
    description: '',
  },
};
