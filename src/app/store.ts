import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { CalculatorSliceReducer } from "../features/Calculator/CalculatorSlice";
import counterReducer from "../features/counter/counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    calculator: CalculatorSliceReducer, // deplay prob
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
