import { useRef, useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../hooks';
import { load } from './asyncActions';
import { changeColor, changeSize, selectOverviews } from './slice';

export const useOverviewsViewModel = () => {
  const loadData = useAppSelector(selectOverviews).loadData;
  const dispatch = useAppDispatch();
  const loaded = useRef(loadData ? true : false);
  useEffect(() => {
    if (!loaded.current) {
      loaded.current = true;
      dispatch(load());
    }
  }, [loaded, dispatch]);

  return {
    loadData,
    changeColor: (e: { id: number }) => dispatch(changeColor(e.id)),
    changeSize: (e: { id: number }) => dispatch(changeSize(e.id)),
  };
};
