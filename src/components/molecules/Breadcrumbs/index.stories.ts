import type { Meta, StoryObj } from '@storybook/react';
import Breadcrumbs from '.';

const meta: Meta<typeof Breadcrumbs> = {
  component: Breadcrumbs,
};

export default meta;
type Story = StoryObj<typeof Breadcrumbs>;

export const MultipleElements: Story = {
  args: {
    breadcrumbs: [
      { id: 1, name: 'おもちゃ', href: '#' },
      { id: 2, name: '赤ちゃん・幼児', href: '#' },
      { id: 3, name: 'お風呂用', href: '#' },
      { id: 4, name: 'あひるちゃん 5羽セット', href: '#' },
    ],
  },
};

export const SingleElements: Story = {
  args: {
    breadcrumbs: [{ id: 1, name: 'おもちゃ', href: '#' }],
  },
};

export const EmptyElements: Story = {
  args: {
    breadcrumbs: [],
  },
};
