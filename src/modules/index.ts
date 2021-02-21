import { combineReducers } from 'redux';
import auth from './auth';
import toast from './toast';

const rootReducer = combineReducers({
  auth,
  toast,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
