import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../modules';
import { authLoading, authFetch, userType } from '../modules/auth';

export default function useAuth() {
  const { user, loading } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();

  const onAuthLoading = useCallback(
    (status: boolean) => dispatch(authLoading(status)),
    [dispatch]
  );

  const onAuthFetch = useCallback(
    (data: userType) => dispatch(authFetch(data)),
    [dispatch]
  );

  return {
    user,
    loading,
    onAuthLoading,
    onAuthFetch,
  };
}
