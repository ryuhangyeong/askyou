import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../modules';
import {
  toastOpen,
  toastClose,
  toastAnimateOpen,
  toastAnimateClose,
} from '../modules/toast';

export default function useToast() {
  const { visible, message, animate } = useSelector(
    (state: RootState) => state.toast
  );
  const dispatch = useDispatch();

  const onToastOpen = useCallback((text: string) => dispatch(toastOpen(text)), [
    dispatch,
  ]);

  const onToastClose = useCallback(() => dispatch(toastClose()), [dispatch]);

  const onToastAnimateOpen = useCallback(() => dispatch(toastAnimateOpen()), [
    dispatch,
  ]);

  const onToastAnimateClose = useCallback(() => dispatch(toastAnimateClose()), [
    dispatch,
  ]);

  const onToast = useCallback(
    (text: string) => {
      if (visible) return;
      onToastOpen(text);
      setTimeout(() => {
        onToastAnimateOpen();
        setTimeout(() => {
          onToastClose();
          onToastAnimateClose();
        }, 600);
      }, 2000);
    },
    [
      visible,
      onToastOpen,
      onToastClose,
      onToastAnimateOpen,
      onToastAnimateClose,
    ]
  );

  return {
    visible,
    message,
    animate,
    onToastOpen,
    onToastClose,
    onToast,
  };
}
