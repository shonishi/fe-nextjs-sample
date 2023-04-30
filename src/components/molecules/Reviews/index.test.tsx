import Reviews from '.';
import renderer from 'react-test-renderer';

describe('Reviews', () => {
  it('指定された値で表示されること', async () => {
    const tree = renderer
      .create(
        <Reviews
          {...{
            reviews: { href: '#', average: 4, totalCount: 117 },
          }}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
