import { ThunkAction, configureStore } from '@reduxjs/toolkit';
import { Action, Store, combineReducers } from 'redux';
import logger from 'redux-logger';
import overviewsSlice, {
  initialState as overviewsState,
} from '@/src/ducks/overviews/slice';

const rootReducer = combineReducers({
  overviews: overviewsSlice.reducer,
});

const preloadedState = () => {
  return { overviews: overviewsState };
};

export type StoreState = ReturnType<typeof preloadedState>;

export type ReduxStore = Store<StoreState>;

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  devTools: process.env.NODE_ENV !== 'production',
  preloadedState: preloadedState(),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
