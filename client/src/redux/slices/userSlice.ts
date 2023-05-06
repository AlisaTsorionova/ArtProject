import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import type { AppThunk } from '../hooks';
import type { RegFormUser } from './types';

type UserState =
  | { status: 'fetching' }
  | {
      id: number;
      name: string;
      email: string;
      password: string;
      status: 'logged';
    }
  | { status: 'empty' };

const initialState: UserState = {
  status: 'fetching',
};

export const userSlice = createSlice({
  name: 'user',
  initialState: initialState as UserState,
  reducers: {
    setUser: (state, action: PayloadAction<UserState>) => action.payload,
    logoutUser: (state) => ({ status: 'empty' }),
  },
});

export const { setUser, logoutUser } = userSlice.actions;
export const logUser =
  (formInput: RegFormUser): AppThunk =>
  (dispatch) => {
    axios
      .post('/reg', formInput)
      .then((res) => dispatch(setUser({ ...res.data, status: 'logged' })))
      .catch((err) => {
        console.log(err);
        dispatch(setUser({ status: 'empty' }));
      });
  };

export default userSlice.reducer;
