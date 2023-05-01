import { ThunkAction, configureStore } from '@reduxjs/toolkit';
import {
  Action,
  AnyAction,
  CombinedState,
  Reducer,
  combineReducers,
} from 'redux';
import logger from 'redux-logger';
import overviewsSlice, {
  OverviewsState,
  initialState as overviewsInitialState,
} from '@/src/ducks/overviews/slice';
import { HYDRATE, createWrapper } from 'next-redux-wrapper';

const reducer: Reducer<
  CombinedState<{
    overviews: OverviewsState;
  }>,
  AnyAction
> = (state, action) => {
  if (action.type === HYDRATE) {
    return {
      ...state,
      ...action.payload,
    };
  } else {
    return combineReducers({
      overviews: overviewsSlice.reducer,
    })(state, action);
  }
};

const preloadedState = () => {
  return { overviews: overviewsInitialState };
};

export const makeStore = () => {
  return configureStore({
    reducer: reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    devTools: process.env.NODE_ENV !== 'production',
    preloadedState: preloadedState(),
  });
};

export const wrapper = createWrapper(makeStore);
type Store = ReturnType<typeof makeStore>;

export type AppDispatch = Store['dispatch'];
export type RootState = ReturnType<Store['getState']>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
