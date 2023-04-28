import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { makeStore } from '@/src/ducks/store';
import Overviews from '.';

describe('Overviews', () => {
  it('初期表示で正常にレンダリングされること', async () => {
    render(
      <Provider store={makeStore()}>
        <Overviews />
      </Provider>,
    );
    // APIレスポンスが反映されていることを確認
    expect(await screen.findByText('おもちゃ')).toBeInTheDocument();
  });

  it('色をクリックした場合、その色が選択状態になること', async () => {
    render(
      <Provider store={makeStore()}>
        <Overviews />
      </Provider>,
    );
    // 初期表示時の非同期処理の完了を待ち合わせる
    await screen.findByText('おもちゃ');
    expect(screen.getByText('Pale yellow').parentElement).toBeChecked();
    await userEvent.click(screen.getByText('Dark yellow'));
    expect(screen.getByText('Dark yellow').parentElement).toBeChecked();
  });

  it('サイズをクリックした場合、そのサイズが選択状態になること', async () => {
    render(
      <Provider store={makeStore()}>
        <Overviews />
      </Provider>,
    );
    // 初期表示時の非同期処理の完了を待ち合わせる
    await screen.findByText('おもちゃ');
    expect(screen.getByText('XS').parentElement).toBeChecked();
    await userEvent.click(screen.getByText('M'));
    expect(screen.getByText('M').parentElement).toBeChecked();
  });
});
