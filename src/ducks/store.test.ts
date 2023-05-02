import { makeStore } from './store';
import { configureStore } from '@reduxjs/toolkit';
import {
  overviewsSlice,
  initialState as overviewsInitialState,
} from './overviews/slice';
import logger from 'redux-logger';
import { HYDRATE } from 'next-redux-wrapper';

jest.mock('@reduxjs/toolkit', () => {
  return {
    ...jest.requireActual('@reduxjs/toolkit'),
    configureStore: jest.fn(),
  };
});

describe('store', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('makeStore', () => {
    describe('reducer', () => {
      const state = { dummy1: 'dummy1' };
      const actionPayload = { dummy2: 'dummy2' };

      it('action.typeがHYDRATEの場合、payloadとマージしたstateを返すこと', () => {
        makeStore();
        const configureStoreMock = configureStore as jest.Mock;
        expect(configureStoreMock.mock.calls).toHaveLength(1);
        const result = configureStoreMock.mock.calls[0][0].reducer(state, {
          type: HYDRATE,
          payload: actionPayload,
        });
        expect(result).toEqual(Object.assign({}, state, actionPayload));
      });

      it('action.typeがHYDRATEではない場合、combineReducersの実行結果を返すこと', () => {
        jest.resetModules();
        const combineReducersMock = jest.fn().mockReturnValue(
          jest.fn().mockReturnValue({
            dummy: 'dummy',
          }),
        );
        jest.doMock('redux', () => {
          return {
            ...jest.requireActual('redux'),
            combineReducers: combineReducersMock,
          };
        });
        const configureStoreMock = jest.fn();
        jest.doMock('@reduxjs/toolkit', () => {
          return {
            ...jest.requireActual('@reduxjs/toolkit'),
            configureStore: configureStoreMock,
          };
        });

        return import('./store').then((store) => {
          store.makeStore();

          expect(configureStoreMock.mock.calls).toHaveLength(1);
          const result = configureStoreMock.mock.calls[0][0].reducer(state, {
            type: 'NOT_HYDRATE',
            payload: actionPayload,
          });
          expect(combineReducersMock.mock.calls).toHaveLength(1);
          expect(JSON.stringify(combineReducersMock.mock.calls[0][0])).toEqual(
            JSON.stringify({
              overviews: overviewsSlice.reducer,
            }),
          );
          expect(result).toEqual({ dummy: 'dummy' });
        });
      });
    });

    describe('middleware', () => {
      it('redux-loggerを追加すること', () => {
        makeStore();
        const configureStoreMock = configureStore as jest.Mock;
        expect(configureStoreMock.mock.calls).toHaveLength(1);
        const concatMock = jest.fn();
        configureStoreMock.mock.calls[0][0].middleware(
          jest.fn().mockReturnValue({
            concat: concatMock,
          }),
        );
        expect(concatMock.mock.calls).toHaveLength(1);
        expect(concatMock.mock.calls[0][0]).toEqual(logger);
      });
    });

    describe.each([
      ['production', false],
      ['development', true],
    ])(`devTools`, (nodeEnv, expected) => {
      const env = process.env;

      beforeEach(() => {
        jest.resetModules();
        process.env = { ...env };
      });

      afterEach(() => {
        process.env = env;
      });

      it(`process.env.NODE_ENVが${nodeEnv}の場合、${expected}を返すこと`, () => {
        process.env = {
          ...env,
          NODE_ENV: nodeEnv as 'development' | 'production' | 'test',
        };
        makeStore();
        const configureStoreMock = configureStore as jest.Mock;
        expect(configureStoreMock.mock.calls).toHaveLength(1);
        expect(configureStoreMock.mock.calls[0][0].devTools).toBe(expected);
      });
    });

    describe('preloadedState', () => {
      it('preloadedStateを実行すると、初期のstateが返されること', () => {
        makeStore();
        const configureStoreMock = configureStore as jest.Mock;
        expect(configureStoreMock.mock.calls).toHaveLength(1);
        const result = configureStoreMock.mock.calls[0][0].preloadedState;
        expect(result).toEqual({ overviews: overviewsInitialState });
      });
    });
  });

  describe('wrapper', () => {
    it('createWrapperの実行結果を返すこと', () => {
      jest.resetModules();
      const createWrapperMock = jest.fn().mockReturnValue({
        dummy: 'dummy',
      });
      jest.doMock('next-redux-wrapper', () => {
        return {
          ...jest.requireActual('next-redux-wrapper'),
          createWrapper: createWrapperMock,
        };
      });

      return import('./store').then((store) => {
        expect(createWrapperMock.mock.calls).toHaveLength(1);
        expect(createWrapperMock.mock.calls[0][0]).toEqual(store.makeStore);
        expect(store.wrapper).toEqual({
          dummy: 'dummy',
        });
      });
    });
  });
});
