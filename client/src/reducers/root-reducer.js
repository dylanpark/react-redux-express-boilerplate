import { combineReducers } from 'redux';

import exampleReducer from 'reducers/example-reducer';

const rootReducer = combineReducers({
  exampleReducer: exampleReducer
});

export default rootReducer;
