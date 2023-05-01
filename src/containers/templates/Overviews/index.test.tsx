import { useOverviewsViewModel } from '@/src/ducks/overviews/hooks';
import Overviews from '.';

const loadDataMock = new (jest.fn())();
const changeColorMock = jest.fn();
const changeSizeMock = jest.fn();
jest.mock('@/src/ducks/overviews/hooks', () => {
  return {
    __esModule: true,
    useOverviewsViewModel: jest.fn(() => {
      return {
        loadData: loadDataMock,
        changeColor: changeColorMock,
        changeSize: changeSizeMock,
      };
    }),
  };
});

jest.mock(
  '@/src/components/templates/Overviews',
  () =>
    ({
      loadData,
      changeColor,
      changeSize,
    }: ReturnType<typeof useOverviewsViewModel>) => {
      return {
        loadData,
        changeColor,
        changeSize,
      };
    },
);

describe('Overviews', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  it('Overviewsのtemplateを返すこと', () => {
    const result = Overviews();
    expect((useOverviewsViewModel as jest.Mock).mock.calls).toHaveLength(1);
    expect(result.props).toEqual(
      expect.objectContaining({
        loadData: loadDataMock,
        changeColor: changeColorMock,
        changeSize: changeSizeMock,
      }),
    );
  });
});
