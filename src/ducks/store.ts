import { ThunkAction, configureStore } from '@reduxjs/toolkit';
import { Action, combineReducers } from 'redux';
import logger from 'redux-logger';
import overviewsSlice, {
  initialState as overviewsInitialState,
} from '@/src/ducks/overviews/slice';
import { HYDRATE, createWrapper } from 'next-redux-wrapper';

const combinedReducer = combineReducers({
  overviews: overviewsSlice.reducer,
});

const reducer: typeof combinedReducer = (state, action) => {
  if (action.type === HYDRATE) {
    return {
      ...state,
      ...action.payload,
    };
  } else {
    return combinedReducer(state, action);
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
