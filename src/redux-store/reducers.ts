import { combineReducers } from 'redux';

import {
  reducer as dataReducer
} from './data';

export interface State {
  data: {};
}

export const reducers = combineReducers({
  data: dataReducer
});
