import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { Comment } from 'entities/Comment';
import { fetchCommentsByArticleId } from './fetchCommentsByArticleId';

const data: Comment[] = [
    {
        id: '1',
        user: {
            id: '1',
            username: 'User',
        },
        text: 'string',
    },
    {
        id: '2',
        user: {
            id: '1',
            username: 'User',
        },
        text: 'string',
    },
];

describe('fetchCommentsByArticleId', () => {
    test('success', async () => {
        const thunk = new TestAsyncThunk(fetchCommentsByArticleId);
        thunk.api.get.mockReturnValue(Promise.resolve({ data }));

        const result = await thunk.callThunk('1');

        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(data);
    });

    test('error get article', async () => {
        const thunk = new TestAsyncThunk(fetchCommentsByArticleId);
        thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
        const result = await thunk.callThunk('1');

        expect(result.meta.requestStatus).toBe('rejected');
    });
});
