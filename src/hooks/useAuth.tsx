import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import firebase from 'firebase';
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

  const onAuthLoadingPromise = async (promise: () => Promise<void>) => {
    onAuthLoading(true);
    await promise();
    onAuthLoading(false);
  };

  // TODO 리팩토링
  const onAuthStateChanged = async () => {
    onAuthLoading(true);
    firebase.auth().onAuthStateChanged((data) => {
      if (!data) onAuthFetch(data);
      else {
        const { displayName, email, uid } = data;
        onAuthFetch({
          displayName,
          email,
          uid,
        });
      }
      onAuthLoading(false);
    });
  };

  return {
    user,
    loading,
    onAuthLoading,
    onAuthFetch,
    onAuthStateChanged,
    onAuthLoadingPromise,
  };
}
