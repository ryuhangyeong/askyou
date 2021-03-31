import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../modules';
import { toastOpen } from '../modules/toast';
import useAnimation from './useAnimation';

export default function useToast() {
  const { message } = useSelector((state: RootState) => state.toast);
  const dispatch = useDispatch();
  const { visible, animate, comeback } = useAnimation();

  const onToastOpen = useCallback((text: string) => dispatch(toastOpen(text)), [
    dispatch,
  ]);

  const onToast = useCallback(
    (text: string) => {
      comeback();
      onToastOpen(text);
    },
    [comeback, onToastOpen]
  );

  return {
    visible,
    animate,
    message,
    onToast,
    onToastOpen,
  };
}
