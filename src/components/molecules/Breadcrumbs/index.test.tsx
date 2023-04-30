import Breadcrumbs from '.';
import renderer from 'react-test-renderer';

describe('Breadcrumbs', () => {
  it('breadcrumbsの要素が複数の場合、全て表示されること', async () => {
    const tree = renderer
      .create(
        <Breadcrumbs
          {...{
            breadcrumbs: [
              { id: 1, name: 'おもちゃ', href: '#' },
              { id: 2, name: '赤ちゃん・幼児', href: '#' },
              { id: 3, name: 'お風呂用', href: '#' },
              { id: 4, name: 'あひるちゃん 5羽セット', href: '#' },
            ],
          }}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('breadcrumbsの要素が1つの場合、1つだけ表示されること', async () => {
    const tree = renderer
      .create(
        <Breadcrumbs
          {...{ breadcrumbs: [{ id: 1, name: 'おもちゃ', href: '#' }] }}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('breadcrumbsが空の場合、何も表示されないこと', async () => {
    const tree = renderer
      .create(<Breadcrumbs {...{ breadcrumbs: [] }} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
