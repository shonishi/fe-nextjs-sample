import Colors from '.';
import renderer from 'react-test-renderer';

describe('Colors', () => {
  it('colorsの要素が複数の場合、全て表示されること', async () => {
    const tree = renderer
      .create(
        <Colors
          {...{
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
            changeColor: jest.fn(),
          }}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('colorsの要素が1つの場合、1つだけ表示されること', async () => {
    const tree = renderer
      .create(
        <Colors
          {...{
            colors: [
              {
                id: 1,
                name: 'Pale yellow',
                class: 'bg-yellow-50',
                selectedClass: 'ring-gray-400',
              },
            ],
            selectedColorId: 1,
            changeColor: jest.fn(),
          }}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('colorsが空の場合、何も表示されないこと', async () => {
    const tree = renderer
      .create(
        <Colors
          {...{
            colors: [],
            selectedColorId: 0,
            changeColor: jest.fn(),
          }}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
