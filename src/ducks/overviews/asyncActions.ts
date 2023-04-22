import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchProductOverviews } from '@/src/repository/client/fetchProductOverviews';

export const load = createAsyncThunk('Overviews/load', async () => {
  return await fetchProductOverviews();
});
