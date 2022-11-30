import { combineReducers } from '@reduxjs/toolkit';
import userReducer from '../Redux/User/reducer';

const appReducer = combineReducers({
  user: userReducer,
});
export default appReducer;
