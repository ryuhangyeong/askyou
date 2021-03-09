import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../modules';
import useLoading from './useLoading';
import { authFetch, userType } from '../modules/auth';
import { getCurrentUser } from '../api/auth';

export default function useAuth() {
  const { user } = useSelector((state: RootState) => state.auth);
  const { onLoadingStart, onLoadingFinish } = useLoading();

  const dispatch = useDispatch();

  const onAuthFetch = useCallback(
    (data: userType) => dispatch(authFetch(data)),
    [dispatch]
  );

  /*
   * @description createRequest로 하는 경우 변경사항을 감지하지 못하여 아래처럼 직접 로더 구현
   */
  const onGetCurrentUser = async () => {
    onLoadingStart('auth/CURRENT_USER');
    getCurrentUser((data) => {
      if (!data) onAuthFetch(data);
      else {
        const { displayName, email, uid } = data;
        onAuthFetch({
          displayName,
          email,
          uid,
        });
      }
      onLoadingFinish('auth/CURRENT_USER');
    });
  };

  return {
    user,
    onAuthFetch,
    onGetCurrentUser,
  };
}
