import type { Meta, StoryObj } from '@storybook/react';
import ImageGallery from '.';

const meta: Meta<typeof ImageGallery> = {
  component: ImageGallery,
};

export default meta;
type Story = StoryObj<typeof ImageGallery>;

export const MultipleElement: Story = {
  args: {
    images: [
      {
        src: 'https://www.pakutaso.com/shared/img/thumb/PAK74_ahirucyansusumu_TP_V.jpg',
        alt: 'Two each of gray, white, and black shirts laying flat.',
      },
      {
        src: 'https://www.pakutaso.com/shared/img/thumb/PAK85_enjinahirucyan_TP_V.jpg',
        alt: 'Model wearing plain black basic tee.',
      },
      {
        src: 'https://www.pakutaso.com/shared/img/thumb/PAK88_amazonst_TP_V.jpg',
        alt: 'Model wearing plain gray basic tee.',
      },
      {
        src: 'https://www.pakutaso.com/shared/img/thumb/NKJ56_dateahiru_TP_V.jpg',
        alt: 'Model wearing plain white basic tee.',
      },
    ],
  },
};

export const SingleElement: Story = {
  args: {
    images: [
      {
        src: 'https://www.pakutaso.com/shared/img/thumb/PAK74_ahirucyansusumu_TP_V.jpg',
        alt: 'Two each of gray, white, and black shirts laying flat.',
      },
    ],
  },
};

export const EmptyElement: Story = {
  args: {
    images: [],
  },
};
