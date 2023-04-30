import Details from '.';
import renderer from 'react-test-renderer';

describe('Details', () => {
  it('detailsに文字列が設定されている場合、それを元に表示されること', async () => {
    const tree = renderer
      .create(
        <Details
          {...{
            details: 'あひるのフィギュアです。お風呂に浮かべて楽しいひと時。',
          }}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('detailsが空の場合、空で表示されること', async () => {
    const tree = renderer
      .create(
        <Details
          {...{
            details: '',
          }}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
