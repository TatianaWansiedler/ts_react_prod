import {
    ArticleBlockType, ArticleType,
    type Article,
    type ArticleTextBlock,
} from 'entities/Article/model/types/article';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { fetchArticleById } from './fetchArticleById';

const block: ArticleTextBlock = {
    id: '1',
    type: ArticleBlockType.TEXT,
    paragraphs: [''],
    title: 'shfbv',
};

const data: Article = {
    id: '1',
    title: 'string',
    subtitle: 'string',
    img: '',
    views: 22,
    createdAt: '22.05.2023',
    type: [ArticleType.ECONOMICS],
    blocks: [block],
    user: {
        id: '1',
        username: 'Tatiana',
    },
};

describe('fetchArticleById', () => {
    test('success', async () => {
        const thunk = new TestAsyncThunk(fetchArticleById);
        thunk.api.get.mockReturnValue(Promise.resolve({ data }));

        const result = await thunk.callThunk('1');

        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(data);
    });

    test('error get article', async () => {
        const thunk = new TestAsyncThunk(fetchArticleById);
        thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
        const result = await thunk.callThunk('1');

        expect(result.meta.requestStatus).toBe('rejected');
    });
});
