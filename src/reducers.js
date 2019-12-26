
import { combineReducers } from 'redux';

import mainReducer from './Note/reducer';

const allReducers = combineReducers({
	mainReducer: mainReducer
});

export default allReducers;