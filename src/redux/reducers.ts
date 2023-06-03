import { combineReducers } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
  // Add your reducers here
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
