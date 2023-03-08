import { AsyncThunkAction } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { ThunkExtraArg } from 'app/providers/StoreProvider/config/StateSchema';
import { AxiosInstance } from 'axios';

type ActionCreatorType<Return, Arg, RejectedValue> = (
  arg: Arg
) => AsyncThunkAction<Return, Arg, { rejectValue: RejectedValue }>;

export class TestAsyncThunk<Return, Arg, RejectedValue> {
  dispatch: jest.MockedFn<any>;
  getState: () => StateSchema;
  actionCreator: ActionCreatorType<Return, Arg, RejectedValue>;
  extra: ThunkExtraArg;

  constructor(actionCreator: ActionCreatorType<Return, Arg, RejectedValue>, mockedAxios: AxiosInstance) {
    this.actionCreator = actionCreator;
    this.dispatch = jest.fn();
    this.getState = jest.fn();
    this.extra = {
      api: mockedAxios,
    };
  }

  async callThunk(arg: Arg) {
    const action = this.actionCreator(arg);
    const result = await action(this.dispatch, this.getState, { api: this.extra.api });
    return result;
  }
}
