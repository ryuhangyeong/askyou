import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../modules';
import { toastOpen } from '../modules/toast';

export default function useToast() {
  const { message } = useSelector((state: RootState) => state.toast);
  const dispatch = useDispatch();

  const onToastOpen = useCallback((text: string) => dispatch(toastOpen(text)), [
    dispatch,
  ]);

  return {
    message,
    onToastOpen,
  };
}
