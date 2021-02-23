import { combineReducers } from 'redux';
import auth from './auth';
import toast from './toast';
import survey from './survey';

const rootReducer = combineReducers({
  auth,
  toast,
  survey,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
