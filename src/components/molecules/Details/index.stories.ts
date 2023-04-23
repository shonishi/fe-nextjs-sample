import type { Meta, StoryObj } from '@storybook/react';
import Details from '.';

const meta: Meta<typeof Details> = {
  component: Details,
};

export default meta;
type Story = StoryObj<typeof Details>;

export const Normal: Story = {
  args: {
    details:
      'かわいいあひるちゃんの5羽セット。シリコン製のため小傷が入りにくく、衛生面も安心です。音を出すにはある程度の力で握る必要がありますので、楽しみながらお子様の筋力を強化することができます。各種サイズをご用意しておりますので、お子様の手の大きさに合う物をお選びいただけます。',
  },
};

export const Empty: Story = {
  args: {
    details: '',
  },
};
