import overviewsSlice, {
  changeColor,
  changeSize,
  initialState,
  load,
  selectOverviews,
  setLoadData,
} from './slice';

jest.mock('@/src/repository/client/fetchProductOverviews', () => {
  return {
    fetchProductOverviews: jest.fn().mockReturnValue(Promise.resolve()),
  };
});

describe('slice', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  const response = {
    id: 4,
    name: 'あひるちゃん 5羽セット',
    price: Math.floor(Math.random() * 1000) + '円',
    href: '#',
    breadcrumbs: [
      { id: 1, name: 'おもちゃ', href: '#' },
      { id: 2, name: '赤ちゃん・幼児', href: '#' },
      { id: 3, name: 'お風呂用', href: '#' },
    ],
    images: [
      {
        src: 'https://www.pakutaso.com/shared/img/thumb/PAK74_ahirucyansusumu_TP_V.jpg',
        alt: 'Two each of gray, white, and black shirts laying flat.',
      },
      {
        src: 'https://www.pakutaso.com/shared/img/thumb/PAK85_enjinahirucyan_TP_V.jpg',
        alt: 'Model wearing plain black basic tee.',
      },
      {
        src: 'https://www.pakutaso.com/shared/img/thumb/PAK88_amazonst_TP_V.jpg',
        alt: 'Model wearing plain gray basic tee.',
      },
      {
        src: 'https://www.pakutaso.com/shared/img/thumb/NKJ56_dateahiru_TP_V.jpg',
        alt: 'Model wearing plain white basic tee.',
      },
    ],
    colors: [
      {
        id: 1,
        name: 'Pale yellow',
        class: 'bg-yellow-50',
        selectedClass: 'ring-gray-400',
      },
      {
        id: 2,
        name: 'Yellow',
        class: 'bg-yellow-100',
        selectedClass: 'ring-gray-400',
      },
      {
        id: 3,
        name: 'Dark yellow',
        class: 'bg-yellow-300',
        selectedClass: 'ring-gray-900',
      },
    ],
    sizes: [
      { id: 1, name: 'XXS', inStock: false },
      { id: 2, name: 'XS', inStock: true },
      { id: 3, name: 'S', inStock: true },
      { id: 4, name: 'M', inStock: true },
      { id: 5, name: 'L', inStock: true },
      { id: 6, name: 'XL', inStock: true },
      { id: 7, name: '2XL', inStock: true },
      { id: 8, name: '3XL', inStock: true },
    ],
    description: 'あひるのフィギュアです。お風呂に浮かべて楽しいひと時。',
    highlights: [
      'お風呂に浮く',
      '握ると音が鳴る',
      'シリコン製で丈夫',
      'お子様の筋力強化にも',
    ],
    details:
      'かわいいあひるちゃんの5羽セット。シリコン製のため小傷が入りにくく、衛生面も安心です。音を出すにはある程度の力で握る必要がありますので、楽しみながらお子様の筋力を強化することができます。各種サイズをご用意しておりますので、お子様の手の大きさに合う物をお選びいただけます。',
    reviews: { href: '#', average: 4, totalCount: 117 },
  };

  const fulfilledState = {
    loadData: {
      ...response,
      selectedColorId: 1,
      selectedSizeId: 2,
    },
  };

  describe('overviewsSlice', () => {
    describe('load', () => {
      it('pendingの場合、loadDataを初期化すること', () => {
        const action = { type: load.pending.type };
        const state = overviewsSlice.reducer(fulfilledState, action);
        expect(state).toEqual(initialState);
      });

      describe('fulfilledの場合', () => {
        it('在庫があるサイズが存在する場合、先頭のサイズでloadDataを更新すること', () => {
          const action = { type: load.fulfilled.type, payload: response };
          const state = overviewsSlice.reducer(initialState, action);
          expect(state).toEqual(fulfilledState);
        });

        it('全てのサイズに在庫が存在しない場合、サイズは0でloadDataを更新すること', () => {
          const action = {
            type: load.fulfilled.type,
            payload: {
              ...response,
              sizes: [
                { id: 1, name: 'XXS', inStock: false },
                { id: 2, name: 'XS', inStock: false },
                { id: 3, name: 'S', inStock: false },
                { id: 4, name: 'M', inStock: false },
                { id: 5, name: 'L', inStock: false },
                { id: 6, name: 'XL', inStock: false },
                { id: 7, name: '2XL', inStock: false },
                { id: 8, name: '3XL', inStock: false },
              ],
            },
          };
          const state = overviewsSlice.reducer(initialState, action);
          expect(state).toEqual({
            loadData: {
              ...fulfilledState.loadData,
              sizes: action.payload.sizes,
              selectedSizeId: 0,
            },
          });
        });
      });
    });

    describe('changeColor', () => {
      it('loadDataが存在する場合、selectedColorIdを更新すること', () => {
        const action = { type: changeColor.type, payload: 3 };
        const state = overviewsSlice.reducer(fulfilledState, action);
        expect(state).toEqual({
          loadData: { ...fulfilledState.loadData, selectedColorId: 3 },
        });
      });

      it('loadDataが存在しない場合、selectedColorIdを更新しないこと', () => {
        const action = { type: changeColor.type, payload: 3 };
        const state = overviewsSlice.reducer(initialState, action);
        expect(state).toEqual(initialState);
      });
    });

    describe('changeSize', () => {
      it('loadDataが存在する場合、selectedSizeIdを更新すること', () => {
        const action = { type: changeSize.type, payload: 3 };
        const state = overviewsSlice.reducer(fulfilledState, action);
        expect(state).toEqual({
          loadData: { ...fulfilledState.loadData, selectedSizeId: 3 },
        });
      });

      it('loadDataが存在しない場合、selectedSizeIdを更新しないこと', () => {
        const action = { type: changeSize.type, payload: 3 };
        const state = overviewsSlice.reducer(initialState, action);
        expect(state).toEqual(initialState);
      });
    });

    describe('setLoadData', () => {
      it('loadDataを更新すること', () => {
        const action = { type: setLoadData.type, payload: response };
        const state = overviewsSlice.reducer(initialState, action);
        expect(state).toEqual(fulfilledState);
      });
    });
  });

  describe('load', () => {
    it('fetchProductOverviewsを実行すること', () => {
      jest.resetModules();
      const createAsyncThunkMock = jest.fn();
      jest.doMock('@reduxjs/toolkit', () => {
        return {
          ...jest.requireActual('@reduxjs/toolkit'),
          createAsyncThunk: createAsyncThunkMock,
        };
      });
      const fetchProductOverviewsMock = jest
        .fn()
        .mockReturnValue(Promise.resolve());
      jest.doMock('@/src/repository/client/fetchProductOverviews', () => {
        return {
          fetchProductOverviews: fetchProductOverviewsMock,
        };
      });

      return import('./slice').then(async () => {
        expect(createAsyncThunkMock.mock.calls).toHaveLength(1);
        expect(createAsyncThunkMock.mock.calls[0][0]).toEqual('Overviews/load');
        await createAsyncThunkMock.mock.calls[0][1]();
        expect(fetchProductOverviewsMock.mock.calls).toHaveLength(1);
      });
    });
  });

  describe('selectOverviews', () => {
    it('overviewsを返すこと', () => {
      expect(selectOverviews({ overviews: {} })).toEqual({});
    });
  });
});
