import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ErrorMessage } from "../../types/error";

type ErrorState = {
  error: ErrorMessage | null;
};

const initialState: ErrorState = {
  error: null,
};

const errorSlice = createSlice({
  name: "error",
  initialState,
  reducers: {
    setError: (state, action: PayloadAction<ErrorMessage>) => {
      state.error = action.payload;
    },
    removeError: (state) => {
      state.error = null;
    },
  },
});

export const setError = errorSlice.actions.setError;
export const removeError = errorSlice.actions.removeError;
export const errorReducer = errorSlice.reducer;
