import ImageGallery from '.';
import renderer from 'react-test-renderer';

describe('ImageGallery', () => {
  it('imagesの要素が複数の場合、全て表示されること', async () => {
    const tree = renderer
      .create(
        <ImageGallery
          {...{
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
          }}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('imagesの要素が1つの場合、1つだけ表示されること', async () => {
    const tree = renderer
      .create(
        <ImageGallery
          {...{
            images: [
              {
                src: 'https://www.pakutaso.com/shared/img/thumb/PAK74_ahirucyansusumu_TP_V.jpg',
                alt: 'Two each of gray, white, and black shirts laying flat.',
              },
            ],
          }}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('imagesが空の場合、何も表示されないこと', async () => {
    const tree = renderer.create(<ImageGallery {...{ images: [] }} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
