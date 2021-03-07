import { loadingStart, loadingFinish } from '../modules/loading';
import store from '../store';

export const createRequestTypes = (type: string) => {
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;
  return [type, SUCCESS, FAILURE];
};

/*
 * @todos type
 */
export default (type: string, promise: any) => {
  const [, SUCCESS, FAILURE] = createRequestTypes(type);

  return async (params = {}) => {
    try {
      store.dispatch(loadingStart(type));
      const data = await promise(params);

      return {
        type: SUCCESS,
        payload: {
          data,
        },
      };
    } catch (error) {
      return {
        type: FAILURE,
        payload: {
          error,
        },
      };
    } finally {
      store.dispatch(loadingFinish(type));
    }
  };
};
