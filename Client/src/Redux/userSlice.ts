import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { CounterState, UserCurrentStatus } from '../types/types';

const initialState: CounterState = {
  userCurrentStatus: {
    user: {
      email: "",
      name: "",
      role: "",
      id: 0,
      projects: null,
      direction : "ltr"
    },
  },
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {

    signInSuccess: (state, action: PayloadAction<UserCurrentStatus>) => {
      state.userCurrentStatus = action.payload;
    },
    SignOut: (state) => {
      state.userCurrentStatus = null;
    },
    SetDirection: (state, action: PayloadAction<string>) => {
      document.documentElement.dir = action.payload;
      state.userCurrentStatus.user.direction = action.payload

    },

  },
})

// Action creators are generated for each case reducer function
export const { signInSuccess, SignOut, SetDirection } = userSlice.actions

export default userSlice.reducer
