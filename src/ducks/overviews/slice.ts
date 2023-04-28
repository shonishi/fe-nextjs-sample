import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { load } from './asyncActions';
import Response from '@/src/repository/client/fetchProductOverviews/response';

export interface OverviewsState {
  loadData?: {
    id: number;
    name: string;
    price: string;
    href: string;
    breadcrumbs: { id: number; name: string; href: string }[];
    images: {
      src: string;
      alt: string;
    }[];
    colors: {
      id: number;
      name: string;
      class: string;
      selectedClass: string;
    }[];
    selectedColorId: number;
    sizes: { id: number; name: string; inStock: boolean }[];
    selectedSizeId: number;
    description: string;
    highlights: string[];
    details: string;
    reviews: { href: string; average: number; totalCount: number };
  };
}

export const initialState: OverviewsState = {};

export const overviewsSlice = createSlice({
  name: 'Overviews',
  initialState,
  reducers: {
    changeColor: (state, action: PayloadAction<number>) => {
      if (state.loadData) {
        state.loadData.selectedColorId = action.payload;
      }
    },
    changeSize: (state, action: PayloadAction<number>) => {
      if (state.loadData) {
        state.loadData.selectedSizeId = action.payload;
      }
    },
    setLoadData: (state, action: PayloadAction<Response>) => {
      state.loadData = convertResponseToState(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(load.pending, (state) => {
        state.loadData = undefined;
      })
      .addCase(load.fulfilled, (state, action) => {
        state.loadData = convertResponseToState(action.payload);
      });
  },
});

const convertResponseToState = (response: Response) => {
  const selectedSize = response.sizes.find((size) => size.inStock);
  const selectedSizeId = selectedSize
    ? selectedSize.id
    : // 本来であれば在庫がない旨の表示をするべき。サンプルのため処理を簡略化する。
      0;
  return {
    ...response,
    selectedColorId: response.colors[0].id,
    selectedSizeId: selectedSizeId,
  };
};

export const { changeColor, changeSize, setLoadData } = overviewsSlice.actions;
export const selectOverviews = (state: RootState) => state.overviews;
export default overviewsSlice;
