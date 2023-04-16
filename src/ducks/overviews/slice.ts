import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { load } from './asyncActions';

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
    selectColor: (state, action: PayloadAction<number>) => {
      if (state.loadData) {
        state.loadData.selectedColorId = action.payload;
      }
    },
    selectSize: (state, action: PayloadAction<number>) => {
      if (state.loadData) {
        state.loadData.selectedSizeId = action.payload;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(load.pending, (state) => {
        state.loadData = undefined;
      })
      .addCase(load.fulfilled, (state, action) => {
        const selectedSize = action.payload.sizes.find((size) => size.inStock);
        const selectedSizeId = selectedSize
          ? selectedSize.id
          : action.payload.sizes[0].id;
        state.loadData = {
          ...action.payload,
          selectedColorId: action.payload.colors[0].id,
          selectedSizeId: selectedSizeId,
        };
      });
  },
});
export const { selectColor, selectSize } = overviewsSlice.actions;
export const selectOverviews = (state: RootState) => state.overviews;
export default overviewsSlice;
