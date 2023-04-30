import Highlights from '.';
import renderer from 'react-test-renderer';

describe('Highlights', () => {
  it('highlightsの要素が複数の場合、全て表示されること', async () => {
    const tree = renderer
      .create(
        <Highlights
          {...{
            highlights: [
              'お風呂に浮く',
              '握ると音が鳴る',
              'シリコン製で丈夫',
              'お子様の筋力強化にも',
            ],
          }}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('highlightsの要素が1つの場合、1つだけ表示されること', async () => {
    const tree = renderer
      .create(<Highlights {...{ highlights: ['お風呂に浮く'] }} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('highlightsが空の場合、何も表示されないこと', async () => {
    const tree = renderer
      .create(<Highlights {...{ highlights: [] }} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
