import { Provider } from 'react-redux';
import Overviews from '.';
import { fireEvent, render, screen } from '@testing-library/react';
import { configureStore } from '@reduxjs/toolkit';
import overviewsSlice from '@/src/ducks/overviews/slice';
import { ToolkitStore } from '@reduxjs/toolkit/dist/configureStore';

describe('Overviews', () => {
  let store: ToolkitStore;
  beforeEach(() => {
    store = configureStore({
      reducer: {
        overviews: overviewsSlice.reducer,
      },
    });
  });

  it('初期表示で正常にレンダリングされること', async () => {
    render(
      <Provider store={store}>
        <Overviews />
      </Provider>,
    );

    expect(await screen.findByText('おもちゃ')).toBeInTheDocument();
  });

  it('色をクリックした場合、その色が選択状態になること', async () => {
    render(
      <Provider store={store}>
        <Overviews />
      </Provider>,
    );

    // 初期表示時の非同期処理の完了を待ち合わせる
    await screen.findByText('おもちゃ');

    // TODO 色のクリックイベントを発火し、結果をassertionする
  });
});
