import { createSlice } from '@reduxjs/toolkit';
// import { User, UserSchema } from '../types/userSchema';
// import { USER_LOCALSTORAGE_KEY } from 'shared/const/localStorage';
import { ProfileSchema } from '../types/profile';

const initialState: ProfileSchema = { data: null, isLoading: false, error: undefined, readonly: true };

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    // setAuthData: (state, action: PayloadAction<Profile>) => {
    //   state.authData = action.payload;
    // },
    // initAuthData: state => {
    //   const user = localStorage.getItem(USER_LOCALSTORAGE_KEY);
    //   if (user) {
    //     state.authData = JSON.parse(user);
    //   }
    // },
    // logout: state => {
    //   state.authData = undefined;
    //   localStorage.removeItem(USER_LOCALSTORAGE_KEY);
    // },
  },
});

export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;
