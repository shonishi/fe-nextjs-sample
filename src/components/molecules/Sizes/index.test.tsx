import Sizes from '.';
import renderer from 'react-test-renderer';

describe('Sizes', () => {
  it('sizesの要素が複数の場合、全て表示されること', async () => {
    const tree = renderer
      .create(
        <Sizes
          {...{
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
            changeSize: jest.fn(),
          }}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('sizesの要素が1つの場合、1つだけ表示されること', async () => {
    const tree = renderer
      .create(
        <Sizes
          {...{
            sizes: [{ id: 2, name: 'XS', inStock: true }],
            selectedSizeId: 2,
            changeSize: jest.fn(),
          }}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('sizesが空の場合、何も表示されないこと', async () => {
    const tree = renderer
      .create(
        <Sizes
          {...{
            sizes: [],
            selectedSizeId: 0,
            changeSize: jest.fn(),
          }}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
