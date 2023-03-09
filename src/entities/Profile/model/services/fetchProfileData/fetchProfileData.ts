import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Profile } from '../../types/profile';
import { profileActions } from '../../slice/ProfileSlice';

// eslint-disable-next-line @typescript-eslint/no-invalid-void-type
export const fetchProfileData = createAsyncThunk<Profile, void, ThunkConfig<string>>(
  'profile/fetchProfileData',
  async (_, thunkAPI) => {
    const { dispatch, extra, rejectWithValue } = thunkAPI;

    try {
      const response = await extra.api.get<Profile>('/profile');

      if (!response.data) {
        throw new Error();
      }

      dispatch(profileActions.setProfileData(response.data));

      return response.data;
    } catch (error) {
      console.log('🚀 ~ fetch profile data error:', error);
      return rejectWithValue('fetch profile data error');
    }
  }
);
