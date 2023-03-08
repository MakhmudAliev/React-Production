import { loginByUsername } from 'features/AuthByUsername/model/services/loginByUsername/loginByUsername';
import axios from 'axios';
import { userActions } from 'entities/User/model/slices/UserSlice';
import { TestAsyncThunk } from 'shared/lib/tests/testAsyncThunk/testAsyncThunk';

jest.mock('axios');
const mockedAxios = jest.mocked(axios);

describe('loginByUsername', () => {
  // WITHOUT helper class =====================================================
  // let dispatch: Dispatch;
  // let getState: () => StateSchema;

  // beforeEach(() => {
  //   dispatch = jest.fn();
  //   getState = jest.fn();
  // });

  // test('should dispatch an action to get user data', async () => {
  //   const userData = { username: 'username', id: '1' };

  //   mockedAxios.post.mockReturnValue(Promise.resolve({ data: userData }));
  //   const action = loginByUsername({ username: '123', password: '123' });
  //   const result = await action(dispatch, getState, undefined);

  //   expect(mockedAxios.post).toHaveBeenCalled();
  //   expect(result.meta.requestStatus).toBe('fulfilled');
  //   expect(result.payload).toEqual(userData);
  //   expect(dispatch).toHaveBeenCalledWith(userActions.setAuthData(userData));
  //   expect(dispatch).toHaveBeenCalledTimes(3);
  // });

  // test('should handle 403 status response', async () => {
  //   mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }));
  //   const action = loginByUsername({ username: '123', password: '123' });
  //   const result = await action(dispatch, getState, undefined);

  //   expect(mockedAxios.post).toHaveBeenCalled();
  //   expect(result.meta.requestStatus).toBe('rejected');
  //   expect(result.payload).toEqual('Incorrect username or password');
  //   expect(dispatch).toHaveBeenCalledTimes(2);
  // });

  // WITH helper class =====================================================
  test('should dispatch an action to get user data', async () => {
    const userData = { username: 'username', id: '1' };
    mockedAxios.post.mockReturnValue(Promise.resolve({ data: userData }));

    const thunk = new TestAsyncThunk(loginByUsername, mockedAxios);
    const result = await thunk.callThunk({ username: '123', password: '123' });

    expect(mockedAxios.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(userData);
    expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userData));
    expect(thunk.dispatch).toHaveBeenCalledTimes(3);
  });
  test('should handle 403 status response', async () => {
    mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }));
    const thunk = new TestAsyncThunk(loginByUsername, mockedAxios);
    const result = await thunk.callThunk({ username: '123', password: '123' });

    expect(mockedAxios.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toEqual('Incorrect username or password');
    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
  });
});
