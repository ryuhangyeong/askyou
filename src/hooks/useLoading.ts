import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../modules';
import { loadingStart, loadingFinish } from '../modules/loading';

export default function useLoading() {
  const loading = useSelector((state: RootState) => state.loading);

  const dispatch = useDispatch();

  const onLoadingStart = useCallback((data) => dispatch(loadingStart(data)), [
    dispatch,
  ]);

  const onLoadingFinish = useCallback((data) => dispatch(loadingFinish(data)), [
    dispatch,
  ]);

  return {
    loading,
    onLoadingStart,
    onLoadingFinish,
  };
}
