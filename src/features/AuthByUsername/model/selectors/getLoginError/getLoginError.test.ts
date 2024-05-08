import type { StateSchema } from 'app/providers/StoreProvider';
import { getLoginError } from './getLoginError';

describe('getLoginError', () => {
    test('schould return error', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                error: 'error',
            },
        };
        expect(getLoginError(state as StateSchema)).toEqual('error');
    });
    test('schould work with empty stater', () => {
        const state: DeepPartial<StateSchema> = {
        };
        expect(getLoginError(state as StateSchema)).toEqual(undefined);
    });
});
