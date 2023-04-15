import { createSlice } from '@reduxjs/toolkit';
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
      name: string;
      class: string;
      selectedClass: string;
    }[];
    sizes: { name: string; inStock: boolean }[];
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
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(load.pending, (state) => {
        state.loadData = undefined;
      })
      .addCase(load.fulfilled, (state, action) => {
        state.loadData = action.payload;
      });
  },
});

export const selectOverviews = (state: RootState) => state.overviews;

export default overviewsSlice;
