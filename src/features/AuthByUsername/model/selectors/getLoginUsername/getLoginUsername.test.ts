import type { DeepPartial } from '@reduxjs/toolkit';
import type { StateSchema } from 'app/providers/StoreProvider';
import { getLoginUsername } from './getLoginUsername';

describe('getLoginUsername', () => {
    test('schould return username', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                username: 'user123',
            },
        };
        expect(getLoginUsername(state as StateSchema)).toEqual('user123');
    });
    test('schould return empty string', () => {
        const state: DeepPartial<StateSchema> = {
        };
        expect(getLoginUsername(state as StateSchema)).toEqual('');
    });
});
