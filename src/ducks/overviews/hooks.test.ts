import { renderHook } from '@testing-library/react-hooks';
import { changeColor, changeSize, load, selectOverviews } from './slice';
import { useAppDispatch, useAppSelector } from '../hooks';
import { useOverviewsViewModel } from './hooks';

jest.mock('../hooks');
jest.mock('./slice');

describe('useOverviewsViewModel', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('stateにloadDataが存在しない場合、loadをdispatchすること', async () => {
    (useAppSelector as jest.Mock).mockReturnValueOnce({});
    const dispatchMock = jest.fn();
    (useAppDispatch as jest.Mock).mockReturnValueOnce(dispatchMock);
    const loadResultMock = new (jest.fn())();
    (load as unknown as jest.Mock).mockReturnValueOnce(loadResultMock);

    const { result } = renderHook(() => useOverviewsViewModel());

    expect((useAppSelector as jest.Mock).mock.calls).toHaveLength(1);
    expect(
      JSON.stringify((useAppSelector as jest.Mock).mock.calls[0][0]),
    ).toEqual(JSON.stringify(selectOverviews));
    expect((useAppDispatch as jest.Mock).mock.calls).toHaveLength(1);
    expect(dispatchMock.mock.calls).toHaveLength(1);
    expect(dispatchMock.mock.calls[0][0]).toEqual(loadResultMock);
    expect(result.current.loadData).toBeUndefined();
  });

  it('stateにloadDataが存在する場合、loadをdispatchしないこと', async () => {
    (useAppSelector as jest.Mock).mockReturnValueOnce({
      loadData: { dummy: 'dummuy' },
    });
    const dispatchMock = jest.fn();
    (useAppDispatch as jest.Mock).mockReturnValueOnce(dispatchMock);

    const { result } = renderHook(() => useOverviewsViewModel());

    expect((useAppSelector as jest.Mock).mock.calls).toHaveLength(1);
    expect(
      JSON.stringify((useAppSelector as jest.Mock).mock.calls[0][0]),
    ).toEqual(JSON.stringify(selectOverviews));
    expect((useAppDispatch as jest.Mock).mock.calls).toHaveLength(1);
    expect(dispatchMock.mock.calls).toHaveLength(0);
    expect(result.current.loadData).toEqual({ dummy: 'dummuy' });
  });

  it('changeColorとchangeSizeを実行すると、それぞれのactionがdispatchされること', async () => {
    (useAppSelector as jest.Mock).mockReturnValueOnce({
      loadData: { dummy: 'dummuy' },
    });
    const dispatchMock = jest.fn();
    (useAppDispatch as jest.Mock).mockReturnValueOnce(dispatchMock);

    const { result } = renderHook(() => useOverviewsViewModel());

    jest.clearAllMocks();
    const changeColorMock = changeColor as unknown as jest.Mock;
    result.current.changeColor({ id: 1 });
    expect(dispatchMock.mock.calls).toHaveLength(1);
    expect(changeColorMock.mock.calls).toHaveLength(1);
    expect(changeColorMock.mock.calls[0][0]).toEqual(1);

    jest.clearAllMocks();
    const changeSizeMock = changeSize as unknown as jest.Mock;
    result.current.changeSize({ id: 2 });
    expect(dispatchMock.mock.calls).toHaveLength(1);
    expect(changeSizeMock.mock.calls).toHaveLength(1);
    expect(changeSizeMock.mock.calls[0][0]).toEqual(2);
  });
});
