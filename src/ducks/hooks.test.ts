import { useSelector } from 'react-redux';
import { useAppDispatch, useAppSelector } from './hooks';

const dispatchMock = new (jest.fn())();
jest.mock('react-redux', () => {
  return {
    ...jest.requireActual('react-redux'),
    useDispatch: () => dispatchMock,
  };
});

describe('hooks', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  it('useAppDispatchを実行すると、useDispatchが返されること', () => {
    expect(useAppDispatch()).toEqual(dispatchMock);
  });
  it('useAppSelectorは、useSelectorであること', () => {
    expect(useAppSelector).toEqual(useSelector);
  });
});
