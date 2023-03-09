import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileData } from './getProfileData';

describe('getProfileData', () => {
  test('should return profile data', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        data: {
          first: 'first',
          lastname: 'last',
          age: 37,
        },
      },
    };
    expect(getProfileData(state as StateSchema)?.first).toEqual('first');
    expect(getProfileData(state as StateSchema)?.lastname).toEqual('last');
    expect(getProfileData(state as StateSchema)?.age).toEqual(37);
  });

  test('should work with an empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileData(state as StateSchema)?.first).toEqual(undefined);
    expect(getProfileData(state as StateSchema)?.lastname).toEqual(undefined);
    expect(getProfileData(state as StateSchema)?.age).toEqual(undefined);
  });
});
