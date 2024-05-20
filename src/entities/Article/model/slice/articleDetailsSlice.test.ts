import type { ArticleDetailsSchema } from 'entities/Article/model/types/articleDetailsSchema';
import {
    ArticleBlockType, ArticleType, type Article, type ArticleTextBlock,
} from 'entities/Article/model/types/article';
import { fetchArticleById } from '../services/fetchArticleById/fetchArticleById';
import { articleDetailsReducer } from '../slice/articleDetailsSlice';

const block: ArticleTextBlock = {
    id: '1',
    type: ArticleBlockType.TEXT,
    paragraphs: [''],
    title: 'shfbv',
};

const article: Article = {
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

describe('articleDetailsSlice', () => {
    test('test update article details service pending', () => {
        const state: DeepPartial<ArticleDetailsSchema> = {
            isLoading: false,
        };

        expect(articleDetailsReducer(
            state as ArticleDetailsSchema,
            fetchArticleById.pending,
        )).toEqual({
            isLoading: true,
        });
    });

    test('test update profile service fullfiled', () => {
        const state: DeepPartial<ArticleDetailsSchema> = {
            isLoading: true,
        };

        expect(articleDetailsReducer(
            state as ArticleDetailsSchema,
            fetchArticleById.fulfilled(article, '', ''),
        )).toEqual({
            isLoading: false,
            data: article,
        });
    });
});
