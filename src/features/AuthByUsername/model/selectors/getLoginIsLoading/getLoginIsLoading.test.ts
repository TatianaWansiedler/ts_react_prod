import type { StateSchema } from 'app/providers/StoreProvider';
import { getLoginIsLoading } from './getLoginIsLoading';

describe('getLoginIsLoading', () => {
    test('schould return true', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                isLoading: true,
            },
        };
        expect(getLoginIsLoading(state as StateSchema)).toEqual(true);
    });
    test('schould work with empty stater', () => {
        const state: DeepPartial<StateSchema> = {
        };
        expect(getLoginIsLoading(state as StateSchema)).toEqual(false);
    });
});
