import Description from '.';
import renderer from 'react-test-renderer';

describe('Description', () => {
  it('descriptionに文字列が設定されている場合、それを元に表示されること', async () => {
    const tree = renderer
      .create(
        <Description
          {...{
            description:
              'あひるのフィギュアです。お風呂に浮かべて楽しいひと時。',
          }}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('descriptionが空の場合、空で表示されること', async () => {
    const tree = renderer
      .create(
        <Description
          {...{
            description: '',
          }}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
