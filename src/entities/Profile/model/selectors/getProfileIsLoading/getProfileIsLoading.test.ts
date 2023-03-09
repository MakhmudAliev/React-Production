import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileIsLoading } from '../getProfileIsLoading/getProfileIsLoading';

describe('getProfileIsLoading', () => {
  test('should return loading state for profile', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        isLoading: true,
      },
    };
    expect(getProfileIsLoading(state as StateSchema)).toEqual(true);
  });

  test('should work correctly with an empty state', () => {
    expect(getProfileIsLoading({} as StateSchema)).toEqual(undefined);
  });
});
