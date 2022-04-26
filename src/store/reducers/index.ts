import { combineReducers } from '@reduxjs/toolkit';
import universities from './universities';
import status from './status';

export default combineReducers({
  universities,
  status,
})