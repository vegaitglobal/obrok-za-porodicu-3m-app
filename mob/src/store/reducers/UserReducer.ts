import {createSlice} from '@reduxjs/toolkit';

interface UserState {
  isOnboarded: boolean;
}

const initialState: UserState = {
  isOnboarded: false,
};

const userSlice = createSlice({
  initialState,
  name: 'userReducer',
  reducers: {
    setIsOnboarded(state) {
      state.isOnboarded = true;
    },
  },
});

export const {setIsOnboarded} = userSlice.actions;

export default userSlice.reducer;
