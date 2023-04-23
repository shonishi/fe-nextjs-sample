import { useRef, useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../hooks';
import { load } from './asyncActions';
import { changeColor, changeSize, selectOverviews } from './slice';

export const useOverviewsViewModel = () => {
  const loadData = useAppSelector(selectOverviews).loadData;
  const dispatch = useAppDispatch();
  const loading = useRef(false);
  useEffect(() => {
    if (!loading.current) {
      loading.current = true;
      dispatch(load());
    }
  }, [loading, dispatch]);

  return {
    loadData,
    changeColor: (e: { id: number }) => dispatch(changeColor(e.id)),
    changeSize: (e: { id: number }) => dispatch(changeSize(e.id)),
  };
};
