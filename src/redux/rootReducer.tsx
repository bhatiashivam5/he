// UTILS
import { combineReducers } from "redux";
import jobDetailsSlice from "./slices/jobDetailsSlice";

const rootReducer: any = combineReducers({
  common: jobDetailsSlice,
});

export default rootReducer;
