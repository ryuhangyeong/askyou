import { combineReducers } from 'redux';
import auth from './auth';
import toast from './toast';
import survey from './survey';
import loading from './loading';

const rootReducer = combineReducers({
  auth,
  toast,
  survey,
  loading,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
